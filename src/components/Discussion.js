import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";

const Discussion = () => {
  const { discussionId } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await fetch(
          `https://localhost:5001/api/Discussion/${discussionId}`
        );
        if (!response.ok) {
          throw new Error("Error fetching discussion");
        }

        const discussionData = await response.json();
        setDiscussion(discussionData);
      } catch (error) {
        console.error("Error fetching discussion:", error);
      }
    };

    fetchDiscussion();
  }, [discussionId, messageSent]);

  const handleSendMessage = async () => {
    try {
      const response = await fetch(
        `https://localhost:5001/api/Discussion/${discussionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: newMessage }),
        }
      );
      if (!response.ok) {
        throw new Error("Error sending message");
      }
      setNewMessage("");
      setMessageSent(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!discussion) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List style={{ margin: -10, marginTop: 5, marginBottom: 5 }}>
          {discussion.messages.map((message, index) => (
            <ListItem key={message.id}>
              <Paper
                style={{
                  marginTop: "5px",
                  padding: "10px",
                  background: "#313331",
                  width: "100%",
                }}
              >
                <Typography>{formatDate(message.timestamp)}</Typography>
                {index === 0 && (
                  <Typography style={{ fontWeight: "bold", color: "#4CAF50" }}>
                    {discussion.title}
                  </Typography>
                )}
                <Typography>{message.content}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Your message"
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          fullWidth
          multiline
          rows={4}
          style={{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 0,
            marginBottom: 0,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          style={{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fi-FI", options);
}

export default Discussion;

import React, { useState, useEffect } from "react";
import { List, ListItem, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";

const Discussion = () => {
  const { discussionId } = useParams();
  const [discussion, setDiscussion] = useState(null);

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
  }, [discussionId]);

  if (!discussion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <List>
        {discussion.messages.map((message, index) => (
          <ListItem key={message.id}>
            <Paper
              style={{
                marginTop: "10px",
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
    </div>
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

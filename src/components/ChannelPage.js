import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItem, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChannelPage = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        console.log(channelId);
        const response = await fetch(
          `https://localhost:5001/api/Channel/${channelId}`
        );
        if (!response.ok) {
          throw new Error("Error fetching channel");
        }
        const channelData = await response.json();
        setChannel(channelData);
      } catch (error) {
        console.error("Error fetching channel:", error);
      }
    };

    fetchChannel();
  }, [channelId]);

  if (!channel) {
    return <div>Loading...</div>;
  }

  const navigateToDiscussionPage = (discussionId) => {
    console.log(discussionId);
    navigate(`/discussion/${discussionId}`);
  };

  return (
    <div>
      <h2>{channel.name}</h2>
      <List>
        {channel.discussions.map((discussion) => (
          <ListItem key={discussion.id}>
            <Paper
              style={{
                marginTop: "10px",
                padding: "10px",
                background: "#313331",
                width: "100%",
              }}
            >
              <Link onClick={() => navigateToDiscussionPage(discussion.id)}>
                <Typography style={{ fontWeight: "bold", color: "#4CAF50" }}>
                  {discussion.title}
                </Typography>
              </Link>
              {discussion.messages.map((message) => (
                <Typography key={message.id}>{message.content}</Typography>
              ))}
            </Paper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChannelPage;

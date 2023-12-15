import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, Typography, Paper } from '@mui/material';

const ChannelPage = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        console.log(channelId)
        const response = await fetch(`https://localhost:5001/api/Channel/${channelId}`);
        if (!response.ok) {
          throw new Error('Error fetching channel');
        }
        const channelData = await response.json();
        setChannel(channelData);
      } catch (error) {
        console.error('Error fetching channel:', error);
      }
    };

    fetchChannel();
  }, [channelId]);

  if (!channel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{channel.name}</h2>
      <List>
        {channel.discussions.map(discussion => (
          <ListItem key={discussion.id}>
            <Paper style={{ marginTop: '10px', padding: '10px', background: '#313331', width: '100%' }}>
              <Typography style={{ fontWeight: 'bold', color: '#4CAF50'}}>{discussion.title}</Typography>
              {discussion.messages.map(message => (
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

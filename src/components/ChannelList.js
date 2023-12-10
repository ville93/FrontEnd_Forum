import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, TextField, Paper, Link, Box } from '@mui/material';

const ChannelList = ({ onSearch }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []); 

  const fetchChannels = () => {
    fetch('https://localhost:5001/api/Channel')
      .then(response => response.json())
      .then(data => setChannels(data))
      .catch(error => console.error('Error fetching channels:', error));
  };

  const handleStartDiscussion = () => {
    window.location.href = '/channel';
  };

  return (
    <Paper elevation={3} style={{ padding: '10px', background: '#000000', height: '100%', overflowY: 'auto' }}>
      <List>
        {channels.map((channel) => (
          <ListItem key={channel.id}>
            <Link component="button" variant="body1" onClick={handleStartDiscussion}>
              <Typography>{channel.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChannelList;

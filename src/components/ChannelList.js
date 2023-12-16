import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChannelList = ({ onChannelsFetched }) => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChannels();
  }, []); 

  const fetchChannels = () => {
    fetch('https://localhost:5001/api/Channel')
      .then(response => response.json())
      .then(data => {
        setChannels(data);
        onChannelsFetched(data); // Päivitä channelsForDiscussion Home.js:ssä
      })
      .catch(error => console.error('Error fetching channels:', error));
  };

  const handleStartDiscussion = (channelId) => {
    console.log(channelId)
    navigate(`/channel/${channelId}`);
  };

  return (
    <Paper elevation={3} style={{ padding: '10px', background: '#000000', height: '100%', overflowY: 'auto' }}>
      <Typography>CHANNELS</Typography>
      <List>
        {channels.map((channel) => (
          <ListItem key={channel.id}>
            <Link component="button" variant="body1" onClick={() => handleStartDiscussion(channel.id)}>
              <Typography>{channel.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChannelList;

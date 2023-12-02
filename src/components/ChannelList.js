import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, TextField, Paper } from '@mui/material';

const ChannelList = ({ onSearch }) => {
  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchChannels();
  }, []); 

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  const fetchChannels = () => {
    fetch('https://localhost:5001/api/Channel')
      .then(response => response.json())
      .then(data => setChannels(data))
      .catch(error => console.error('Error fetching channels:', error));
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#333333', color: '#ffffff' }}>
      <TextField
        label="Search Channels"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {channels.map((channel) => (
          <ListItem key={channel.id} onClick={() => onSearch(channel.name)}>
            <Typography>{channel.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChannelList;

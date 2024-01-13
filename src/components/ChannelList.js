import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import CelebrityIcon from '@mui/icons-material/EmojiPeople';
import GamepadIcon from '@mui/icons-material/Gamepad';
import  PoliticsIcon  from '@mui/icons-material/Balance';
import CategoryIcon from '@mui/icons-material/Category';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const ChannelList = ({ onChannelsFetched }) => {
  const [channels, setChannels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChannels();
  }, []); 

  const fetchChannels = () => {
    fetch('https://localhost:5001/api/Channel')
      .then(response => response.json())
      .then(data => {
        setChannels(data);
        onChannelsFetched(data); 
      })
      .catch(error => console.error('Error fetching channels:', error));
  };

  const getChannelIcon = (channelName) => {
    switch(channelName.toLowerCase()) {
      case 'business':
        return <BusinessIcon />;
      case 'celebrity':
        return <CelebrityIcon />;
      case 'gaming':
        return <GamepadIcon />;
      case 'general':
        return <CategoryIcon />;
      case 'politics':
        return <PoliticsIcon />;
      case 'sports':
        return <SportsSoccerIcon />;
      default:
        return <WorkIcon />;
    }
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
            {getChannelIcon(channel.name)}
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

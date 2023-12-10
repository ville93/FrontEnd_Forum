// Home.js
import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Tabs, Tab, Paper } from '@mui/material';
import SearchBox from './SearchBox';
import ChannelList from './ChannelList';
import DiscussionList from './DiscussionList';
import StartDiscussionButton from './StartDiscussionButton';
import NewDiscussion from './NewDiscussion';  // Import the NewDiscussion component
import { Link } from 'react-router-dom';

const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [channelsForDiscussion, setChannelsForDiscussion] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);  // State to manage popup visibility

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStartDiscussion = () => {
    setPopupOpen(true);  // Open the popup
  };

  const handleChannelsForDiscussionFetched = (channels) => {
    setChannelsForDiscussion(channels);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);  // Close the popup
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box mt={4}>
        <Grid container spacing={1} style={{ position: 'absolute', left: '50%' }}>
          <Typography>YLIN LAUTA</Typography>
        </Grid>
      </Box>

      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'left' }}>
            <ChannelList onChannelsFetched={handleChannelsForDiscussionFetched} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Box>
              {/* Open the popup when the button is clicked */}
              <StartDiscussionButton onClick={handleStartDiscussion} />
            </Box>

            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Newest" />
              <Tab label="The Most Popular" />
            </Tabs>

            <Paper elevation={3} style={{ marginTop: '10px', padding: '10px', background: '#000000' }}>
              {tabValue === 0 && (
                <div>
                  <DiscussionList endpoint="/api/Discussion/newest" />
                </div>
              )}

              {tabValue === 1 && (
                <div>
                  <DiscussionList endpoint="/api/Discussion/popular" />
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Render the NewDiscussion popup component */}
      {isPopupOpen && (
        <NewDiscussion
          channels={channelsForDiscussion}
          onClose={handleClosePopup}
        />
      )}
    </Container>
  );
};

export default Home;

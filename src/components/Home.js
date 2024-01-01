import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Tabs, Tab, Paper } from '@mui/material';
import ChannelList from './ChannelList';
import DiscussionList from './DiscussionList';
import StartDiscussionButton from './StartDiscussionButton';
import NewDiscussion from './NewDiscussion'; 
import SearchBox from './SearchBox';
import BaseLayout from './Header';

const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [channelsForDiscussion, setChannelsForDiscussion] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);  

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStartDiscussion = () => {
    console.log('pop up call')
    setPopupOpen(true);  
  };

  const handleChannelsForDiscussionFetched = (channels) => {
    setChannelsForDiscussion(channels);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);  
  };

  return (
    <Container maxWidth={false} disableGutters>
      <BaseLayout/>

      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'left' }}>
            <ChannelList onChannelsFetched={handleChannelsForDiscussionFetched} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <StartDiscussionButton onClick={handleStartDiscussion} />
              </Grid>
              <Grid item>
                <SearchBox 
                  endpoint="/api/Channel"
                />
              </Grid>
            </Grid>

            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Newest" />
              <Tab label="The Most Popular" />
            </Tabs>

            <Paper elevation={3} style={{ marginTop: '10px', padding: '0px', background: '#000000' }}>
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

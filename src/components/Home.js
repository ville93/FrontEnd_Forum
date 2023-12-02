import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Tabs, Tab, Paper } from '@mui/material';
import SearchBox from './SearchBox';
import ChannelList from './ChannelList';
import DiscussionList from './DiscussionList';
import StartDiscussionButton from './StartDiscussionButton';

const Home = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStartDiscussion = () => {
    console.log('Start Discussion clicked');
  };

  const handleChannelSearch = (searchTerm) => {
    console.log('Channel search:', searchTerm);
  };

  return (
    <Container>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SearchBox onSearch={handleChannelSearch} />
            <ChannelList onSearch={handleChannelSearch} />
          </Grid>

          <Grid item xs={9}>
            <Box>
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

            <Paper elevation={3} style={{ marginTop: '10px', padding: '10px' }}>
              {tabValue === 0 && (
                <div>
                  <Typography variant="h5">Newest Discussions</Typography>
                  <DiscussionList endpoint="/api/Discussion/newest" />
                </div>
              )}

              {tabValue === 1 && (
                <div>
                  <Typography variant="h5">The Most Popular Discussions</Typography>
                  <DiscussionList endpoint="/api/Discussion/popular" />
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;

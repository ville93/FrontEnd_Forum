import React, { useState } from 'react';
import { Tabs, Tab, List, ListItem, Typography } from '@mui/material';
import DiscussionList from './DiscussionList';

const Home = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Newest" />
        <Tab label="The Most Popular" />
      </Tabs>

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
    </div>
  );
};

export default Home;

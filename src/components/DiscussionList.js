import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, Paper, Grid } from '@mui/material';

const DiscussionList = ({ endpoint }) => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:5001${endpoint}`)
      .then(response => response.json())
      .then(data => setDiscussions(data))
      .catch(error => console.error('Error fetching discussions:', error));
  }, [endpoint]);

  return (
    <div>
      <Grid container spacing={2} alignItems="center" >
        <Grid item xs={8}>
          <Typography>Topic</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Answers</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Last Message</Typography>
        </Grid>
      </Grid>
      <List>
        {discussions.map(discussion => (
          <ListItem key={discussion.id}>
            <Paper style={{ padding: '10px', background: '#313331', width: '100%' }}>
              <Grid container spacing={2} alignItems="center" style={{ marginLeft: 'auto', marginRight: 'auto' }}> 
                <Grid item xs={8}>
                  <Typography style={{ fontWeight: 'bold', color: '#4CAF50' }}>{discussion.title}</Typography>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>{discussion.messages[0].content}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>12</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>23.12.2023</Typography>
                </Grid>
              </Grid>
            </Paper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DiscussionList;

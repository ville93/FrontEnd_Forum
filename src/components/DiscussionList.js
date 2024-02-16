import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, Paper, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DiscussionList = ({ endpoint }) => {
  const [discussions, setDiscussions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:5001${endpoint}`)
      .then(response => response.json())
      .then(data => setDiscussions(data))
      .catch(error => console.error('Error fetching discussions:', error));
  }, [endpoint]);

  const navigateToDiscussionPage = (discussionId) => {
    console.log(discussionId)
    navigate(`/discussion/${discussionId}`);
  };

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
                  <Link onClick={() => navigateToDiscussionPage(discussion.id)}>
                    <Typography style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                      {discussion.title}
                    </Typography>
                  </Link>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>{discussion.messages[0].content}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>{discussion.answersCount}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography style={{ fontWeight: 'bold', color: '#ffffff' }}>{formatDate(discussion.messages[0].time)}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleDateString('fi-FI', options);
}

export default DiscussionList;

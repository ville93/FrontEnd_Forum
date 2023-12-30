import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography, Paper } from '@mui/material';

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
      <List>
        {discussions.map(discussion => (
          <ListItem key={discussion.id}>
            <Paper style={{ marginTop: '10px', padding: '10px', background: '#313331', width: '100%' }}>
              <Typography style={{ fontWeight: 'bold', color: '#4CAF50'}}>{discussion.title}</Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DiscussionList;

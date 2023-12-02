import React, { useState, useEffect } from 'react';
import { List, ListItem, Typography } from '@mui/material';

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
            <Typography>{discussion.title}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DiscussionList;

import React from 'react';
import { Button } from '@mui/material';

const StartDiscussionButton = ({ onClick }) => {
  const handleStartDiscussion = () => {
    onClick();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginBottom: '10px' }}
      onClick={handleStartDiscussion}
    >
      Start Discussion
    </Button>
  );
};

export default StartDiscussionButton;

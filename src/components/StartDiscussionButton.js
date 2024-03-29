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
      style={{ height: '40px'}}
      onClick={handleStartDiscussion}
    >
      Start Discussion
    </Button>
  );
};

export default StartDiscussionButton;

import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const NewDiscussion = ({ channels, onClose }) => {
  const [channel, setChannel] = useState('');

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}> 
      <DialogContent>
      <Button
        color="primary"
        onClick={onClose}
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        Close
      </Button>

      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        style={{ marginBottom: '16px', marginTop: '16px' }}
      />
      <FormControl sx={{ minWidth: 120, marginBottom: '16px' }}>
        <InputLabel id="demo-simple-select-helper-label">Kanava</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={channel}
          label="Kanava"
          onChange={handleChannelChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {channels.map((ch) => (
            <MenuItem key={ch.id} value={ch.id}>
              {ch.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Message"
        multiline
        rows={8}
        fullWidth
        variant="outlined"
        style={{ marginBottom: '16px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
        Submit
      </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewDiscussion;

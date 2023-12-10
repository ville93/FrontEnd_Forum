// NewDiscussion.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
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
    // Tee toimenpiteet valitulla kanavalla ja muilla lomaketiedoilla
    // ...

    // Sulje popup-ikkuna
    onClose();
  };

  return (
    <Container maxWidth={false}>
      {/* Sulje-nappi */}
      <Button
        color="primary"
        onClick={onClose}
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
      </Button>

      {/* Lomakkeen muut osat */}
      <TextField
        label="Otsikko"
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
            <em>Ei mikään</em>
          </MenuItem>
          {channels.map((ch) => (
            <MenuItem key={ch.id} value={ch.id}>
              {ch.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Viesti"
        multiline
        rows={8}
        fullWidth
        variant="outlined"
        style={{ marginBottom: '16px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
        Lähetä
      </Button>
    </Container>
  );
};

export default NewDiscussion;

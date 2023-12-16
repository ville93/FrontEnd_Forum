import React, { useState } from 'react';
import { TextField, Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ endpoint }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.length === 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      navigate(`/search-results/${searchTerm}`);
    }
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      {showAlert && (
        <Alert variant="outlined" severity="error">
          Search term is empty!
        </Alert>
      )}
    </div>
  );
};

export default SearchBox;

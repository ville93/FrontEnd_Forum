import React, { useState } from 'react';
import { Alert, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
      <Box>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 4 }}>
          <div style={{ padding: 8 }}>
            <SearchIcon style={{ color: 'white' }} />
          </div>
            <InputBase
              placeholder="Search..."
              style={{ color: 'white', padding: 8 }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
        </div>
      </Box>
      {showAlert && (
          <Alert variant="outlined" severity="error">
            Search term is empty!
          </Alert>
        )}
    </div>
  );
};

export default SearchBox;

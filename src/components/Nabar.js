import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          style={{ textDecoration: "none", color: "white" }}
        >
          MyChat
        </Typography>
        <Box flexGrow={1} />
        <SearchBox endpoint="/api/Channel" />
        <Box>
          <IconButton color="inherit" component={Link} to="/login">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBox from "./SearchBox";
import LogoutIcon from "@mui/icons-material/Logout";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    setOpen(false);
    navigate(`/`);
  };

  return (
    <React.Fragment>
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
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CancelIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;

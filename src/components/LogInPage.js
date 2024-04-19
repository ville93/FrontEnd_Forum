import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const loginInformation = {
      email: username,
      password: password,
    };

    fetch("https://localhost:5001/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInformation),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logging in failed");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/home");
      })
      .catch((error) => {
        setError("Invalid credentials");
        console.error("Error logging in:", error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to MyChat
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error" align="center" color="error">
                {error}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography align="center">
              Don't have an account?{" "}
              <RouterLink to="/register">Register here</RouterLink>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LogInPage;

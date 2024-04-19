import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const registerInformation = {
      name: name,
      email: email,
      password: password,
      role: role,
    };

    fetch("https://localhost:5001/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInformation),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json();
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.message === "Registration failed") {
          setError(data.errors.map((error) => error.description).join(", "));
        } else {
          setError("");
          navigate("/login");
        }
      })
      .catch((error) => {
        setError("Registration failed");
        console.error("Error registering:", error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register to MyChat
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleRegister}
            >
              Register
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
              Already have an account?{" "}
              <RouterLink to="/login">Login here</RouterLink>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegisterPage;

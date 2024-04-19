import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Nabar";
import LogInPage from "./components/LogInPage";
import Home from "./components/Home";
import NewDiscussion from "./components/NewDiscussion";
import ChannelPage from "./components/ChannelPage";
import DiscussionsBySearch from "./components/DiscussionsBySearch";
import Discussion from "./components/Discussion";
import RegisterPage from "./components/RegisterPage";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4CAF50",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/new-discussion"
            element={
              <>
                <Navbar />
                <NewDiscussion />
              </>
            }
          />
          <Route
            path="/channel/:channelId"
            element={
              <>
                <Navbar />
                <ChannelPage />
              </>
            }
          />
          <Route
            path="/search-results/:searchTerm"
            element={
              <>
                <Navbar />
                <DiscussionsBySearch />
              </>
            }
          />
          <Route
            path="/discussion/:discussionId"
            element={
              <>
                <Navbar />
                <Discussion />
              </>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

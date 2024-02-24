import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const NewDiscussion = ({ channels, onClose }) => {
  const [title, setTitle] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    const newDiscussion = {
      title: title,
      channelId: channel,
      messages: [{ content: message }],
    };

    fetch("https://localhost:5001/api/discussion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussion),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add discussion");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Discussion added successfully:", data);
        const discussionId = data.id;
        navigateToDiscussionPage(discussionId);
        onClose();
      })
      .catch((error) => {
        console.error("Error adding discussion:", error);
        onClose();
      });
  };

  const navigateToDiscussionPage = (discussionId) => {
    console.log(discussionId);
    navigate(`/discussion/${discussionId}`);
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent>
        <Button
          color="primary"
          onClick={onClose}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </Button>

        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          style={{ marginBottom: "16px", marginTop: "16px" }}
          value={title}
          onChange={handleTitleChange}
        />
        <FormControl sx={{ minWidth: 120, marginBottom: "16px" }}>
          <InputLabel id="demo-simple-select-helper-label">Channel</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={channel}
            label="Channel"
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
          style={{ marginBottom: "16px" }}
          value={message}
          onChange={handleMessageChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewDiscussion;

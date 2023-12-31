import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { ADD_TASK } from "../redux/actions";
import { useDispatch } from "react-redux";

export const TasksAdder = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    setTitle(event.target.value);
  };

  const addTaskItem = () => {
    if (title.length) {
      dispatch({
        type: ADD_TASK,
        payload: {
          title,
        },
      });

      setTitle("");
    }
  };
  return (
    <Box>
      <TextField
        style={{ width: 400 }}
        label="Add new task"
        variant="filled"
        value={title}
        onChange={handleTextChange}
      ></TextField>
      <Button
        style={{ height: 55 }}
        variant="contained"
        color="primary"
        onClick={addTaskItem}
      >
        Add
      </Button>
    </Box>
  );
};

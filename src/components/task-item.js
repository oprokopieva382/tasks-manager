import { FormControlLabel, FormGroup, ListItem, Checkbox,  } from "@mui/material";
import React from "react";

export const TaskItem = ({ id, title, completed, important }) => {

const toggleCheckbox = (event) => {
    //Need to dispatch TOGGLE action
};

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={completed} color="primary" name={title} onChange={toggleCheckbox}/>
          }
          label={title}
        ></FormControlLabel>
      </FormGroup>
    </ListItem>
  );
};

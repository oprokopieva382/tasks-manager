import {
  FormControlLabel,
  FormGroup,
  ListItem,
  Checkbox,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TASK, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "../redux/actions";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const TaskItem = ({ id, title, completed, important }) => {
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    dispatch({ type: TOGGLE_COMPLETED, payload: { id } });
  };
  const handleDeleteClick = () => {
    dispatch({ type: DELETE_TASK, payload: { id } });
  };

  const toggleImportant = () => {
    dispatch({type: TOGGLE_IMPORTANT, payload: {id}})
  };
  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              color="primary"
              name={title}
              onChange={toggleCheckbox}
            />
          }
          label={
            <Typography style={{ textDecoration: completed && "Line-through" }}>
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>
      <ListItemSecondaryAction>
        <IconButton  onClick={toggleImportant}>
          {important ? <StarRateIcon /> : <StarBorderIcon />}
        </IconButton>
        <IconButton onClick={handleDeleteClick} edge="end">
          <HighlightOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

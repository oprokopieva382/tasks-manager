import React from "react";
import { Box, Divider, Typography, Grid, List } from "@mui/material";
import { useSelector } from "react-redux";
import { TaskItem } from "./task-item";

const sxStyles = {
  margin: 5,
  padding: 5,
  backgroundColor: "rgb(92.9%, 92.9%, 92.9%)",
};
export const TasksContainer = () => {
  const tasks = useSelector((state) => state.tasks
    );

  return (
    <Box sx={sxStyles}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My tasks
          </Typography>
          <Divider />
          <List>
            {tasks.map((task) => {
              if (!task.completed) {
                return <TaskItem {...task} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {tasks.map((task) => {
              if (task.completed) {
                return <TaskItem {...task} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

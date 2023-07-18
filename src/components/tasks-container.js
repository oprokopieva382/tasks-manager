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
  const tasks = useSelector((state) => state.tasks);
  const prioritisedTasks = function prioritise() {
    const importantTasks = [];
    const notImportantTasks = [];
    tasks.forEach((t) => {
      if (t.important) {
        importantTasks.push(t);
      } else {
        notImportantTasks.push(t);
      }
    })
    return importantTasks.concat(notImportantTasks)
  }()
  return (
    <Box sx={sxStyles}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My tasks
          </Typography>
          <Divider />
          <List>
            {prioritisedTasks.map((task) => {
              if (!task.completed) {
                return <TaskItem key={task.id} {...task} />;
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
                return <TaskItem key={task.id} {...task} />;
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

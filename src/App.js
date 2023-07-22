import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import {TasksAdder} from "./components/tasks-adder"
import { TasksContainer } from "./components/tasks-container";

export const sxStyles = {};

const appContainer = {
  paddingLeft: 100,
  paddingRight: 100,
  marginTop: 10,
};

const wrapper = {
  textAlign: "center",
  width: "100%",
};

export const App = () => {
  return (
    <Box sx={sxStyles}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <img
              alt="Tasks logo"
              style={{ width: "50px" }}
              src="logo.png"
            ></img>
          </IconButton>
          <Typography variant="h5">
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={appContainer}>
        <Paper sx={wrapper} elevation={0}>
        {/* Component to add tasks - "TasksAdder" */}
        <TasksAdder/>
        {/*  Container area to display all tasks = " TasksContainer*/}
        <TasksContainer/>
        </Paper>
      </Container>
    </Box>
  );
};

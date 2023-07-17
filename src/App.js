import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <img
              alt="Tasks logo"
              style={{ width: "50px" }}
              src="logo.png"
            ></img>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

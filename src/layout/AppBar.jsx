import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

export function AppBar() {
  return (
    <header>
      <MuiAppBar position="sticky">
        <Container>
          <Toolbar disableGutters>
            <AdbIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
            >
              Paçaro
            </Typography>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </header>
  );
}

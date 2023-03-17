import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";

function ResponsiveAppBar({ navBarLinks }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (toggleValue) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(toggleValue);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <TemporaryDrawer
              navBarLinks={navBarLinks}
              drawerOpen={drawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "initial" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Az Website Solution
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
ResponsiveAppBar.propTypes = {
  navBarLinks: PropTypes.array.isRequired,
};
export default ResponsiveAppBar;

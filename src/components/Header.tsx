import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Name from "./Name";
import { usePlanet } from "../hooks/PlanetContext";

const Header = (): JSX.Element => {
  const { planet } = usePlanet();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Equinor Space station. Please don't panic.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {planet?.source}
          </Typography>
          <Name />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

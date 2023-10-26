import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Name from "./Name";
import { useSpaceFranchisesContext } from "./SpaceFranchisesProvider";

const Header = (): JSX.Element => {
  const { spaceFranchises } = useSpaceFranchisesContext();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Equinor Space station. Please don't panic.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {spaceFranchises}
          </Typography>
          <Name />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

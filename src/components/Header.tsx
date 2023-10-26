import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Name from "./Name";
import { User } from "../utils/types";

type HeaderProps = {
  user: User;
}

const Header = ({user}: HeaderProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Equinor Space station. Please don't panic.
          </Typography>
          <Name user={user}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

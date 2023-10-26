import React from "react";
import { User } from "../utils/types";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Equinor Space station. Please don't panic.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {user.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

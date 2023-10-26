import React from "react";
import { User } from "../utils/types";
import { Typography } from "@mui/material";
import useUserContext from "../hooks/UserHook";

const Name = () => {
  const user: User = useUserContext();

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
      {user.name}
    </Typography>
  );
};

export default Name;

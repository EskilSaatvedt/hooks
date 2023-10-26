import React from "react";
import { User } from "../utils/types";
import { Typography } from "@mui/material";
import useUser from "./UserHook";

const Name = () => {
  const user: User = useUser();

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
      {user ? user.name : ""}
    </Typography>
  );
};

export default Name;

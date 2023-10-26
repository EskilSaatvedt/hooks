import React, { useContext } from "react";
import { User } from "../utils/types";
import { Typography } from "@mui/material";
import { UserContext } from "./UserContext";

const Name = () => {
  const user: User | undefined = useContext(UserContext);

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
      {user ? user.name : ""}
    </Typography>
  );
};

export default Name;

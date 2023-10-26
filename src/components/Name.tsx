import React, { useContext } from "react";
import { User } from "../utils/types";
import { Typography } from "@mui/material";

type NameProps = {
  user: User;
}

const Name = ({user}:NameProps) => {

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
      {user ? user.name : ""}
    </Typography>
  );
};

export default Name;

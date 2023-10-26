import { useContext } from "react";
import { UserContext } from "./UserContext";
import { User } from "../utils/types";

export const useUser = (): User => {
  const user = useContext(UserContext);
  if (user === undefined)
    throw new Error("useUser must be used within a UerProvider");
  return user;
};

export default useUser;

import { useContext } from "react";
import { UserContext } from "./UserContext";
import { User } from "../utils/types";

export const useUserContext = (): User => {
  const user = useContext(UserContext);
  if (user === undefined)
    throw new Error("useUser must be used within a UerProvider");
  return user;
};

export default useUserContext;

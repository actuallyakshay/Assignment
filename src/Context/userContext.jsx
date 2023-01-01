import { useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "./Reducer";
import data from "../user.json"
export const UserContext = createContext();


export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(data.users)
  const [state, dispatch] = useReducer(reducer, {
    singleUserData: {},
    userData,
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

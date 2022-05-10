import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";

const UserContext = createContext({});

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    api
      .get(`/api/leads/home`)
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <UserContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, useUser };

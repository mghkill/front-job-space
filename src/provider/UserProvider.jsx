import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services";

const UserContext = createContext({});

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  const handleRegister = (payload, handleClose) => {
    api
      .post("/api/leads", payload)
      .then((response) => {
        toast.success("Conta cadastrada!");
        api
          .get(`/api/leads/home`)
          .then((response) => {
            setUsersList(response.data);
            handleClose();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error("Erro ao editar"));
  };

  const handleDelete = (element) => {
    api
      .delete(`/api/leads/delete/${element.id}`)
      .then((response) => {
        toast.success("Conta Deletada!");
        api
          .get(`/api/leads/home`)
          .then((response) => {
            setUsersList(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error("Erro ao deletar"));
  };

  const handleUpdate = (payload, handleClose) => {
    api
      .patch("/api/leads/update", payload)
      .then((response) => {
        toast.success("Conta Editada!");
        api
          .get(`/api/leads/home`)
          .then((response) => {
            setUsersList(response.data);
            handleClose();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error("Erro ao editar"));
  };

  useEffect(() => {
    api
      .get(`/api/leads/home`)
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((err) => toast.error("Erro desconhecido"));
  }, []);

  return (
    <UserContext.Provider
      value={{
        usersList,
        setUsersList,
        handleRegister,
        handleDelete,
        handleUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, useUser };

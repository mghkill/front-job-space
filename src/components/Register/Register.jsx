import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "../../provider/UserProvider";
import { api } from "../../services";
import ModalRegister from "../ModalRegister";
import { ContainerRegister } from "./styles";

const Register = () => {
  const { setUsersList } = useUser();
  const handleRegister = (payload, handleClose) => {
    axios
      .post("https://crud-job-space-ps.herokuapp.com/api/leads", payload)
      .then((response) => {
        toast.success("Conta cadastrada!");
        api
          .get(`/api/leads/home`)
          .then((response) => {
            setUsersList(response.data);
            handleClose()
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error("Erro ao editar"));
  };

  return (
    <ContainerRegister>
      <ModalRegister handleRegister={handleRegister} />
    </ContainerRegister>
  );
};
export default Register;

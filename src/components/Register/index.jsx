import { useUser } from "../../provider/UserProvider";
import ModalRegister from "../ModalRegister";
import { ContainerRegister } from "./styles";

const Register = () => {
  const { handleRegister } = useUser();

  return (
    <ContainerRegister>
      <ModalRegister handleRegister={handleRegister} />
    </ContainerRegister>
  );
};
export default Register;

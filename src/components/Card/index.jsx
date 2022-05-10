// import axios from "axios";
// import toast from "react-hot-toast";
// import { api } from "../../services";
import ButtonUi from "../ButtonUi";
import { ButtonBox, Container } from "./styles";

const Card = ({ element }) => {
  const handleDelete = (data) => {
    // const payload = { email: "testef@mail.com" };
    // axios
    //   .delete(
    //     "https://crud-job-space-ps.herokuapp.com/api/leads/delete",
    //     payload,
    //     {
    //       headers: { "Content-Type": "application/json; charset=utf-8" },
    //     }
    //   )
    //   .then((response) => {
    //     toast.success("Edição realizada!");
    //   })
    //   .catch((err) => toast.error("Erro ao editar"));
  };

  return (
    <Container>
      <ButtonBox>
        <ButtonUi>Editar</ButtonUi>

        <ButtonUi onClick={handleDelete}>Deletar</ButtonUi>
      </ButtonBox>

      <p>
        Nome: {element.name}, E-mail: {element.email}, Tel: {element.phone},
        Cep: {element.cep}, Logradouro: {element.placeLog}, Numero:{" "}
        {element.number}, Bairro: {element.district}, Complemento:{" "}
        {element.complement}, Cidade: {element.localityCity}, UF: {element.uf},
        Edições nos dados: {element.visits}
      </p>
    </Container>
  );
};
export default Card;

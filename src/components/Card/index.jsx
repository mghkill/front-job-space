import { useUser } from "../../provider/UserProvider";
import ButtonUi from "../ButtonUi";
import ModalUpdate from "../ModalUpdate";
import { ButtonBox, Container } from "./styles";

const Card = ({ element }) => {
  const { handleDelete } = useUser();

  return (
    <Container>
      <ButtonBox>
        <ModalUpdate element={element} />

        <ButtonUi onClick={() => handleDelete(element)}>Deletar</ButtonUi>
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

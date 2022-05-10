import InputComponent from "../InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/material";
import ButtonRegister from "../ButtonUi";
import { BoxButton } from "./styles";
import { useUser } from "../../provider/UserProvider";

const UpdateForm = ({ handleClose, element }) => {
  const { handleUpdate } = useUser();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(11)
      .max(11)
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Digite um número válido"
      ),
    newEmail: yup.string().required("Novo E-mail obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleUpdateUser = (data) => {
    const phone = data.phone.split("");
    phone.splice(0, 0, "(");
    phone.splice(3, 0, ")");
    phone.splice(9, 0, "-");

    data.phone = phone.join("");
    data.email = element.email;

    handleUpdate(data, handleClose);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.name?.message}
            register={register}
            valueRegister="name"
            type="name"
            placeholder="Pode mudar o nome se quiser"
          />
        </Box>
        <Box w="100%" paddingBottom="8">
          {/* Não mascarei o TEL porque tinha pouco tempo!  */}
          <InputComponent
            maxlength="11"
            errors={errors.phone?.message}
            register={register}
            valueRegister="phone"
            type="phone"
            placeholder="Novo número"
          />
        </Box>

        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.newEmail?.message}
            register={register}
            valueRegister="newEmail"
            type="newEmail"
            placeholder="Novo E-mail"
          />
        </Box>
        <BoxButton w="200%" h="100px">
          <ButtonRegister>ENVIAR</ButtonRegister>
        </BoxButton>
      </form>
    </>
  );
};
export default UpdateForm;

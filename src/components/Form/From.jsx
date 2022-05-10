import InputComponent from "../InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/material";
import ButtonRegister from "../ButtonUi";
import { BoxButton } from "./styles";

const Form = ({ handleRegister }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Não é um email válido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(11)
      .max(11)
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "789486"
      ),
    cep: yup.string().required("Cep obrigatório"),
    number: yup.string().required("Número obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleAddUser = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.name?.message}
            register={register}
            valueRegister="name"
            type="name"
            placeholder="Nome"
          />
        </Box>
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.email?.message}
            label={"-"}
            register={register}
            valueRegister="email"
            type="email"
            placeholder="E-mail"
          />
        </Box>{" "}
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.phone?.message}
            label={"-"}
            register={register}
            valueRegister="phone"
            type="phone"
            placeholder="Telefone"
          />
        </Box>{" "}
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.cep?.message}
            label={"-"}
            register={register}
            valueRegister="cep"
            type="cep"
            placeholder="Cep - 00000000"
          />
        </Box>{" "}
        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.number?.message}
            label={"-"}
            register={register}
            valueRegister="number"
            type="number"
            placeholder="Número"
          />
        </Box>
        <BoxButton w="200%" h="100px">
          <ButtonRegister>ENVIAR</ButtonRegister>
        </BoxButton>
      </form>
    </>
  );
};
export default Form;

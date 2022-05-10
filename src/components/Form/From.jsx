import InputComponent from "../InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/material";
import ButtonRegister from "../ButtonUi";
import { BoxButton, InputCep } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ handleRegister , handleClose}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputCep, setInputCep] = useState("");

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
        "Digite um número válido"
      ),
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
    // os que já estão na variável inputCep, vão dar undefined no data
    // procurar os undefined em data e transformar

    const cep = inputValue.split("");
    cep.splice(5, 0, "-");

    const phone = data.phone.split("");
    phone.splice(0, 0, "(");
    phone.splice(3, 0, ")");
    phone.splice(9, 0, "-");

    data.phone = phone.join("")
    
    if (!data.placeLog) {
      data.placeLog = inputCep.logradouro;
    }
    if (!data.phone) {
      data.phone = inputCep.phone;
    }
    if (!data.district) {
      data.district = inputCep.bairro;
    }
    if (!data.localityCity) {
      data.localityCity = inputCep.localidade;
    }
    if (!data.uf) {
      data.uf = inputCep.uf;
    }
    if (!data.ibge) {
      data.ibge = inputCep.ibge;
    }
    if (!data.gia) {
      data.gia = inputCep.gia;
    }
    if (!data.ddd) {
      data.ddd = inputCep.ddd;
    }
    if (!data.siafi) {
      data.siafi = inputCep.siafi;
    }
    if (!data.complement) {
      data.complement = inputCep.complemento;
    }

    if (!data.cep) {
      data.cep = cep.join("");
    }
    console.log(data)
    handleRegister(data, handleClose);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://viacep.com.br/ws/${inputValue}/json/`,
      responseType: "stream",
    })
      .then((res) => {
        setInputCep(res.data);
      })
      .catch((err) => console.log(""));
  }, [inputValue]);

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
            register={register}
            valueRegister="email"
            type="email"
            placeholder="E-mail"
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
            placeholder="Telefone"
          />
        </Box>

        <Box w="100%" paddingBottom="8">
          {/* Não mascarei o CEP porque tinha pouco tempo! */}
          <InputCep>
            <input
              maxlength="8"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // errors={errors.cep?.message}
              // register={register}
              // valueRegister="cep"
              // type="cep"
              placeholder="Cep - 00000000"
            />
          </InputCep>
        </Box>
        {inputCep && (
          <>
            <p>Logradouro: {inputCep.logradouro}</p>
            {!inputCep.logradouro && (
              <InputComponent
                errors={errors.placeLog?.message}
                register={register}
                valueRegister="placeLog"
                type="placeLog"
                placeholder="logradouro"
              />
            )}

            <p>Complemento: {inputCep.complemento}</p>
            {!inputCep.complemento && (
              <InputComponent
                errors={errors.complement?.message}
                register={register}
                valueRegister="complement"
                type="complement"
                placeholder="Complemento"
              />
            )}

            <p>Bairro: {inputCep.bairro}</p>
            {!inputCep.bairro && (
              <InputComponent
                errors={errors.district?.message}
                register={register}
                valueRegister="district"
                type="district"
                placeholder="Bairro"
              />
            )}

            <p>Cidade: {inputCep.cidade}</p>
            {!inputCep.cidade && (
              <InputComponent
                errors={errors.localityCity?.message}
                register={register}
                valueRegister="localityCity"
                type="localityCity"
                placeholder="Cidade"
              />
            )}

            <p>ibge: {inputCep.ibge}</p>
            {!inputCep.ibge && (
              <InputComponent
                errors={errors.uf?.message}
                register={register}
                valueRegister="uf"
                type="uf"
                placeholder="UF"
              />
            )}

            <p>gia: {inputCep.gia}</p>
            {!inputCep.gia && (
              <InputComponent
                errors={errors.gia?.message}
                register={register}
                valueRegister="gia"
                type="gia"
                placeholder="gia"
              />
            )}

            <p>siafi: {inputCep.siafi}</p>
            {!inputCep.siafi && (
              <InputComponent
                errors={errors.siafi?.message}
                register={register}
                valueRegister="siafi"
                type="siafi"
                placeholder="siafi"
              />
            )}
          </>
        )}

        <Box w="100%" paddingBottom="8">
          <InputComponent
            errors={errors.number?.message}
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

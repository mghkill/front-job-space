import styled from "styled-components";

export const BoxButton = styled.div`
  button {
    width: 102%;
    height: 50px;
  }
  form {
    margin: 0 auto;
  }
  &:hover {
    background-color: black;
    border: solid 2px white;
    color: white;
    transition: 350ms;
    transform: scale(1.1);
  }
`;
export const InputCep = styled.div`
  width: 100%;
  height: 40px;
  color: grey;
  margin: 35px auto;
  input {
    width: 100%;
    height: 100%;
    color: black;
    color: grey;
    border: solid 1px grey;
    border-radius: 8px;
    padding: 4px;
  }
`;

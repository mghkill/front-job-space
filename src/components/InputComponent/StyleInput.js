import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 50px;
  color: grey;
  margin: 40px auto;

  ${(props) =>
    props.errors &&
    css`
      color: red;
      font-size: smaller;
    `};
  input {
    width: 100%;
    height: 100%;
    color: black;
    color: grey;
    border: solid 1px grey;
    border-radius: 8px;
    padding: 4px;
    ${(props) =>
      props.errors &&
      css`
        color: red;
        border: solid 1px red;
      `};
  }
`;

import styled from "styled-components";

export const BoxButton = styled.div`
  button {
    width: 100%;
    height: 50px;
    &:hover {
      background-color: black;
      border: solid 2px white;
      color: white;
      transition: 350ms;
      transform: scale(1.1);
    }
  }
`;

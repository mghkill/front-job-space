import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border: solid 2px black;
  height: 220px;
  p {
    margin-left: 5px;
    margin-bottom: 5px 0px 8px 0px;
    font-size: 19px;
  }
  background-color: white;
  color: black;
  border-radius: 16px;
  margin: 4px;

  &:hover {
    background-color: black;
    border: solid 2px white;
    color: white;
    transition: 350ms;
    transform: scale(1.1);
  }
  button {
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 4px;
`;

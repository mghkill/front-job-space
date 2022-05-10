import { Container } from "./styles";

const ButtonRegister = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default ButtonRegister;

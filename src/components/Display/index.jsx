import { useUser } from "../../provider/UserProvider";
import Card from "../Card";
import { ContainerDisplay } from "./styles";

const Display = () => {
  const { usersList } = useUser();

  return (
    <ContainerDisplay>
      {usersList &&
        usersList.map((e, index) => <Card key={index} element={e} />)}
    </ContainerDisplay>
  );
};

export default Display;

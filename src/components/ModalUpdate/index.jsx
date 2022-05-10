import { useState } from "react";
import ButtonRegister from "../ButtonUi";
import Modal from "@mui/material/Modal";
import { BoxModal, ButtonClose } from "./styles";
import "./styles";
import UpdateForm from "../UpdateFormModal/From";

const ModalUpdate = ({ element }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonRegister type="button" onClick={handleOpen}>
        EDITAR
      </ButtonRegister>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <BoxModal>
          <ButtonClose>
            <ButtonRegister onClick={handleClose}>fechar</ButtonRegister>
          </ButtonClose>
          <UpdateForm element={element} handleClose={handleClose}/>
        </BoxModal>
      </Modal>
    </>
  );
};
export default ModalUpdate;

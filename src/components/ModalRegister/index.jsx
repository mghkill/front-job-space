import { useState } from "react";
import ButtonRegister from "../ButtonUi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form/From";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalRegister = ({ handleRegister }) => {
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
        CADASTRAR
      </ButtonRegister>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Form handleRegister={handleRegister} />
        </Box>
      </Modal>
    </>
  );
};
export default ModalRegister;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import UserSelector from "./_components/UserSelector";
import UserWaiting from "./_components/UserWaiting";
import UserJoined from "./_components/UserJoined";
import { registerStyle } from "./_components/RegisterCourseStyle";

export default function RegisterModal(props) {
  const classes = registerStyle();
  const { showRegisterModal, handleCloseRegisterModal } = props;

  const dataUserSelector = useSelector(
    (state) => state.registerModalReducer.dataUserSelector
  );
  const dataUserWaiting = useSelector(
    (state) => state.registerModalReducer.dataUserWaiting
  );
  const dataUserJoined = useSelector(
    (state) => state.registerModalReducer.dataUserJoined
  );
  return (
    <Modal
      open={showRegisterModal}
      onClose={handleCloseRegisterModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ overflow: "scroll" }}
    >
      <Box className={classes.modalRegister}>
        <UserSelector dataUserSelector={dataUserSelector} />
        <UserWaiting dataUserWaiting={dataUserWaiting} />
        <Divider variant="inset" component="li" sx={{ margin: 2 }} />
        <UserJoined dataUserJoined={dataUserJoined} />
      </Box>
    </Modal>
  );
}

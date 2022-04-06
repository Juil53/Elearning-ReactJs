import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Modal from '@mui/material/Modal';
import UserSelector from './_components/UserSelector';
import UserWaiting from './_components/UserWaiting';
import UserJoined from './_components/UserJoined';
import { registerStyle } from './_components/RegisterCourseStyle';

export default function RegisterModal(props) {
  const classes=registerStyle();
  const {showRegisterModal, handleCloseRegisterModal}=props;
  const dataUserSelector=useState(state=>state.registerModalReducer.dataUserSelector);
  return (
    <Modal
        open={showRegisterModal}
        onClose={handleCloseRegisterModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: 'scroll' }}
        
      >
        
        <Box className={classes.modalRegister}>
          <UserSelector dataUserSelector={dataUserSelector}/>
          <UserWaiting/>
          <Divider variant="inset" component="li" sx={{margin: 2}}  />
          <UserJoined/>
        </Box>
      
      </Modal>
  )
}

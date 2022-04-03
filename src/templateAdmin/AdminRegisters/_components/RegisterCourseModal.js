import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Modal from '@mui/material/Modal';
import UserSelector from './_components/UserSelector';
import UserWaiting from './_components/UserWaiting';
import UserJoined from './_components/UserJoined';
import { registerCourseStyle } from './_components/RegisterCourseStyle';

export default function RegisterCourseModal(props) {
  // const style = {
  //   position: 'absolute',
  //   top: '80%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 800,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
    
  // };
  const classes=registerCourseStyle();
  const {showRegisterModal, handleCloseRegisterModal}=props;
  return (
    <Modal
        open={showRegisterModal}
        onClose={handleCloseRegisterModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: 'scroll' }}
        
      >
        
        <Box className={classes.modalRegister}>
          <UserSelector/>
          <UserWaiting/>
          <Divider variant="inset" component="li" sx={{margin: 2}}  />
          <UserJoined/>
        </Box>
      
      </Modal>
  )
}

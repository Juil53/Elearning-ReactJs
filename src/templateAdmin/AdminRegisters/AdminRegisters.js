import * as React from 'react';
import Box from '@mui/material/Box';
 import Button from '@mui/material/Button';
 import RegisterModal from './_components/RegisterModal';
import { actFetchUserJoined, actFetchUserSelector, actFetchUserWaiting } from './modules/actions';
import { useDispatch,useSelector } from 'react-redux';
import { useStyles } from "../../styles/styles";


export default function AdminRegisters() {
  const classes = useStyles()
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const dispatch = useDispatch();

  const handleUserList=()=>{
    const maKH={
      maKhoaHoc:'00002',
    };
    dispatch(actFetchUserSelector(maKH));
    dispatch(actFetchUserWaiting(maKH));
    dispatch(actFetchUserJoined(maKH));
  };
  
  return (
    <div className={classes.adminContent}>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${20}px` }}
      >
        <Button 
        variant="contained" 
        size="small"
        sx={{m: 2}}
        onClick={()=>{
          handleShowRegisterModal();
          handleUserList();
        }}
        >
          GHI DANH
        </Button>
      </Box>
      <RegisterModal showRegisterModal={showRegisterModal} handleCloseRegisterModal={handleCloseRegisterModal}/>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
 import Button from '@mui/material/Button';
 import RegisterModal from './_components/RegisterModal';
import { actFetchUserSelector } from './modules/actions';
import { useDispatch } from 'react-redux';


export default function AdminRegisters() {
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const dispatch = useDispatch();
 
  const userSelector=()=>{
    const maKH={
      maKhoaHoc:'00002',
    };
    dispatch(actFetchUserSelector(maKH))
  };

  return (
    <div>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${165}px` }}
      >
        <Button 
        variant="contained" 
        size="small"
        sx={{m: 2}}
        onClick={()=>{
          handleShowRegisterModal();
          userSelector();
        }}
        >
          GHI DANH
        </Button>
      </Box>
      <RegisterModal showRegisterModal={showRegisterModal} handleCloseRegisterModal={handleCloseRegisterModal}/>
    </div>
  );
}

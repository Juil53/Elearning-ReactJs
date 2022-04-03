import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Grid } from '@mui/material';

export default function UserSelector() {
  return (
    <>
    <h2>Chọn người dùng</h2>
    <Grid container alignItems="center" direction="row"
    justifyContent="center" marginBottom={3}>
      <Grid item xs={8}>
    
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={userList}
      sx={{ width: '90%' }}
      renderInput={(params) => <TextField {...params} label="Chọn người dùng" />}
    />

      </Grid>
    <Grid item xs={4}>
    <Button 
        variant="contained" 
        size="small"
        sx={{m: 1}}
        >
          GHI DANH
        </Button>
    </Grid>
    </Grid>
    </>
    
  );
}

const userList = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'Double Indemnity', year: 1944 },
  { label: 'Full Metal Jacket', year: 1987 },

];

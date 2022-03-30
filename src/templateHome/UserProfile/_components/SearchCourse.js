import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { actGetKeyword } from '../modules/actions';

export default function SearchCourse() {
    const dispatch =useDispatch();
    const handleOnChange=(event)=>{
        const {value}=event.target;
        dispatch(actGetKeyword(value));
    }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 10px', display: 'flex', alignItems: 'center', width:'70%', marginLeft:2  }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm kiếm khóa học"
        inputProps={{ 'aria-label': 'Tìm kiếm khóa học' }}
        onChange={handleOnChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

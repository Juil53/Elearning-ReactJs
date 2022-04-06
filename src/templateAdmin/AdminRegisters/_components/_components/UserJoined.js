import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { theme, registerStyle } from './RegisterCourseStyle';
import { Button } from '@mui/material';

import { actCancelCourse } from '../../../../templateHome/UserProfile/modules/actions';
import { useDispatch } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(number, account, name, confirmation) {
  return { number, account, name, confirmation };
}


export default function UserJoined(props) {
  const {dataUserJoined} = props;
  const dispatch=useDispatch();
  const courseInfo = {
    maKhoaHoc: '00002',
    taiKhoan: JSON.parse(localStorage.getItem("AdminClient")).taiKhoan,
  };

  const rows = 
  dataUserJoined?.map((user,index)=>{
      return createData(index, user.taiKhoan, user.hoTen)
    });
  const classes=registerStyle();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
    <div className={classes.title}>
      <h2>Học viên đã ghi danh khóa học</h2>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600, textAlign:'center' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Số thứ tự</StyledTableCell>
            <StyledTableCell align="right">Tài khoản</StyledTableCell>
            <StyledTableCell align="right">Họ tên</StyledTableCell>
            <StyledTableCell align="right">Hủy ghi danh</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={()=>{
                  dispatch(actCancelCourse(courseInfo));
                }}>
                  Hủy ghi danh
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ThemeProvider theme={theme}>
    <Stack spacing={2}>
      <p className={classes.pagination} >Trang: {page}</p>
      <Pagination variant="outlined" count={5} page={page} onChange={handleChange} />
    </Stack>
    </ThemeProvider>
    </>
  );
}

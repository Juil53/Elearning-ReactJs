import React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { actCourseDelete } from "../modules/actions";
import { useDispatch } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FE79A2",
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const styles = {
  button: {
    padding: "10px 24px",
    fontSize: "16px",
    margin: "5px",
  },
};

export default function CoursesTable(props) {
  const { dataCourseList } = props;

  const dispatch = useDispatch();
  const handleDeleteCourse = (maKhoaHoc) => {
    dispatch(actCourseDelete(maKhoaHoc));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell>Mã Khóa Học</StyledTableCell>
            <StyledTableCell>Tên Khóa Học</StyledTableCell>
            <StyledTableCell>Hình Ảnh</StyledTableCell>
            <StyledTableCell>Lượt Xem</StyledTableCell>
            <StyledTableCell>Người Tạo</StyledTableCell>
            <StyledTableCell>Thao Tác</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCourseList.map((course, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{course.maKhoaHoc}</StyledTableCell>
              <StyledTableCell>{course.tenKhoaHoc}</StyledTableCell>
              <StyledTableCell sx={{ textWrap: "wrap" }}>
                <img
                  src={course.hinhAnh}
                  alt=""
                  style={{ width: 200, height: 150 }}
                />
              </StyledTableCell>
              <StyledTableCell>{course.luotXem}</StyledTableCell>
              <StyledTableCell>{course.nguoiTao.hoTen}</StyledTableCell>
              <StyledTableCell sx={{ minWidth: "200px" }}>
                <Button variant="contained" sx={styles.button}>
                  Sửa
                </Button>
                <Button
                  variant="contained"
                  sx={styles.button}
                  onClick={() => {
                    handleDeleteCourse(course.maKhoaHoc);
                  }}
                >
                  Xóa
                </Button>
                <Button variant="contained" sx={styles.button}>
                  Ghi danh
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React, { Fragment, useEffect, useState } from 'react';
import { Box } from "@mui/material";
import HeaderAdmin from '../../_components/HeaderAdmin/HeaderAdmin';
import { actCourseAllGet, actCourseSearch } from './modules/actions';
import { useDispatch, useSelector } from 'react-redux';
import CoursesTable from './_components/CoursesTable';

export default function AdminCourses() {
  const styles = {
    root: {
      padding: '20px',
      margin: '0 auto',
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actCourseAllGet());
  }, [])

  const dataCourseList = useSelector(state => state.adminCourseListReducer.dataCourseList);

  const [keyword, setKeyword] = useState('');
  const handleSearch = () => {
    if (!keyword) {
      dispatch(actCourseAllGet());
    } else {
      dispatch(actCourseSearch(keyword))
    }
  }

  return (
    console.log('hello'),
    <Fragment>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${165}px` }}
      >
        <Box sx={styles.root}>
          <HeaderAdmin heading={'Quản lý khóa học'} buttonLabel={'New Course'} placeholder={'Search course'} setKeyword={setKeyword} handleSearch={handleSearch} />
          <CoursesTable />
          {/* {dataCourseList && courseTableComp}
                {dataCourseList && console.log('rootComp')} */}
        </Box>
      </Box>
    </Fragment>
  );
}

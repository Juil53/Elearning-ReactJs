import { Box } from '@mui/material'
import React, { Fragment, useEffect, useMemo, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderAdmin from '../_components/HeaderAdmin/HeaderAdmin'
import { actCourseAllGet, actCourseSearch } from './modules/actions'
import CourseTable from './_components/CourseTable/CourseTable'

export default function CourseAdmin() {
    const styles = {
        root: {
            width: '80%',
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

    const courseTableComp = useMemo(() => <CourseTable courseList={dataCourseList} />, [dataCourseList]);
    // const rootComp = useMemo(() => (
    //     <Box sx={styles.root}>
    //         <HeaderAdmin heading={'Quản lý khóa học'} buttonLabel={'New Course'} placeholder={'Search course'} setKeyword={setKeyword} handleSearch={handleSearch} />
    //         {dataCourseList && courseTableComp}
    //         {dataCourseList && console.log('rootComp')}
    //     </Box>
    // ), dataCourseList)

    return (
        <Fragment>
            <Box sx={styles.root}>
                <HeaderAdmin heading={'Quản lý khóa học'} buttonLabel={'New Course'} placeholder={'Search course'} setKeyword={setKeyword} handleSearch={handleSearch} />
                {dataCourseList && courseTableComp}
                {dataCourseList && console.log('rootComp')}
            </Box>
            {/* {rootComp} */}
        </Fragment>
    )
}

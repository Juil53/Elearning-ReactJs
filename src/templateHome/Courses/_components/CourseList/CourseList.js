import { Box, Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actCourseCategoryGet, actCourseAllGet, actCourseByCategoryGet } from './modules/actions';
import CourseCard from './_components/CourseCard';
import CourseCategory from './_components/CourseCategory';

const theme = createTheme({
    breakpoints: {
        values: {
            xl: 1280,
            lg: 1200,
            md: 992,
            sm: 768,
            xm: 576,
        }
    },
    components: {
        MuiPagination: {
            styleOverrides: {
                ul: {
                    justifyContent: 'center',
                },
            }
        }
    }
})

export default function CourseList() {
    const dispatch = useDispatch();

    const [selectCategory, setSelectCategory] = useState('All');

    useEffect(() => {
        dispatch(actCourseCategoryGet())
    }, []);

    useEffect(() => {
        if (selectCategory !== "All") {
            dispatch(actCourseByCategoryGet(selectCategory));
        } else {
            dispatch(actCourseAllGet());
        }

    }, [selectCategory])

    const loading = useSelector(state => state.courseListReducer.loading);
    const dataCourseCategory = useSelector(state => state.courseCategoryReducer.dataCourseCategory);
    const dataCourseList = useSelector(state => state.courseListReducer.dataCourseList);

    const styles = {
        container: {
            width: '100%',
            mx: 'auto',
            py: '.5rem',
            [theme.breakpoints.up('xl')]: { maxWidth: 1200 },
            [theme.breakpoints.up('lg')]: { maxWidth: 1140 },
            [theme.breakpoints.up('md')]: {
                maxWidth: 960,
                py: '3rem'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: 720,
                py: '1.5rem'
            },
            [theme.breakpoints.up('xm')]: { maxWidth: 540 }
        },
        containerFlex: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        courseItem: {
            width: '100%',
            padding: '15px',
            [theme.breakpoints.up('md')]: {
                maxWidth: '33.33%',
                flex: '0 0 33.33%'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '50%',
                flex: '0 0 50%'
            }
        }
    }

    if (loading) return 'Loading';
    return (
        console.log(dataCourseList),
        <Fragment>
            <ThemeProvider theme={theme}>
                <Box sx={styles.container}>
                    {dataCourseCategory && <CourseCategory courseCategory={dataCourseCategory} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />}
                    <Box sx={styles.containerFlex}>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                        <Box sx={styles.courseItem}>
                            <CourseCard />
                        </Box>
                    </Box>
                    <Pagination count={10} variant='outlined' shape='rounded' />
                </Box>
            </ThemeProvider>
        </Fragment>
    )
}

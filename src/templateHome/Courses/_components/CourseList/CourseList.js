import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Fragment } from 'react';
import CourseCard from './_components/CourseCard';

const theme = createTheme({
    breakpoints: {
        values: {
            customLg: 992,
            customMd: 768,
            customSm: 576
        }
    }
})

export default function CourseList() {
    const styles = {
        container: {
            width: '100%',
            mx: 'auto',
            py: '.5rem',
            [theme.breakpoints.up(1280)]: { maxWidth: 1200 },
            [theme.breakpoints.up(1200)]: { maxWidth: 1140 },
            [theme.breakpoints.up('customLg')]: {
                maxWidth: 960,
                py: '3rem'
            },
            [theme.breakpoints.up('customMd')]: {
                maxWidth: 720,
                py: '1.5rem'
            },
            [theme.breakpoints.up('customSm')]: { maxWidth: 540 }
        },
        containerFlex: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        courseItem: {
            width: '100%',
            padding: '15px',
            [theme.breakpoints.up('customLg')]: {
                maxWidth: '33.33%',
                flex: '0 0 33.33%'
            },
            [theme.breakpoints.up('customMd')]: {
                maxWidth: '50%',
                flex: '0 0 50%'
            }
        }
    }

    return (
        <Fragment>
            <ThemeProvider them={theme}>
                <Box sx={styles.container}>
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
                </Box>
            </ThemeProvider>
        </Fragment>
    )
}

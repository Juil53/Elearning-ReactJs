import { Box, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/system'
import React, { Fragment } from 'react'

const theme = createTheme({
    breakpoints: {
        values: {
            md: 768,
            sm: 576
        }
    }
})

export default function CourseContent() {
    const style = {
        containerFluid: {
            width: '100%',
            px: '15px',
            mx: 'auto'
        },
        containerLeft: {
            paddingRight: '1.5rem',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                flex: '0 0 58.33%',
                maxWidth: '58.33%',
            }
        },
        containerRight: {
            [theme.breakpoints.up('md')]: {
                flex: '0 0 41.67%',
                maxWidth: '41.67%',
            },
            textAlign: 'right',
            '& img': {
                display: 'none',
                [theme.breakpoints.up('sm')]: { display: 'inline' },
                maxWidth: '100%'
            }
        },
        courseTitle: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: '2.75rem',
            mb: '0.5rem'
        },
        courseDescription: {
            fontSize: '1.125rem',
            mb: '1rem'
        },
    }
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Box sx={{ ...style.containerFluid, maxWidth: '1228px' }}>
                    <Box display='flex'>
                        <Box sx={style.containerLeft}>
                            <Typography variant='h1' sx={style.courseTitle}>
                                Open Programming Courses for everyone : Python
                            </Typography>
                            <Typography variant='body1' sx={style.courseDescription}>
                                Learn how to develop dynamic, interactive, and data-driven web apps using JavaScript.
                            </Typography>
                        </Box>
                        <Box sx={style.containerRight}>
                            <img src='/img/course1.jpg' alt='' />
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </Fragment>
    )
}

import React from "react";
import { Box, Link, Typography, Breadcrumbs } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
    breakpoints: {
        values: {
            xl: 1280,
            lg: 1200,
            md: 992,
            sm: 768,
            xm: 576,
        },
    },
});

export default function BreadcrumbContent() {
    const styles = {
        breadcrumbBackground: {
            background: 'url("/img/courses/courses-banner1.jpg") no-repeat center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            position: 'relative',
            zIndex: 1,
            py: '3rem',
            '&:before': {
                content: '""',
                background: 'rgba(0, 0, 0, .55)',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                minHeight: '100%',
                zIndex: -1,
                backgroundImage: 'linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)',
                opacity: '.8'
            }
        },
        container: {
            width: '100%',
            mx: 'auto',
            py: '1rem',
            px: '15px',
            [theme.breakpoints.up('xl')]: { maxWidth: 1200 },
            [theme.breakpoints.up('lg')]: { maxWidth: 1140 },
            [theme.breakpoints.up('md')]: {
                maxWidth: 960,
                padding: '1.5rem',
                pt: '3rem',
            },
            [theme.breakpoints.up('sm')]: { maxWidth: 720 },
            [theme.breakpoints.up('xm')]: { maxWidth: 540 }
        },
        title: {
            color: '#fff',
            fontSize: 45,
            fontWeight: 600,
            textAlign: 'center',
            mt: '3rem',
            [theme.breakpoints.up('md')]: { pt: '3rem' },
            [theme.breakpoints.up('xm')]: { pt: '1rem' },
            [theme.breakpoints.down('md')]: { fontSize: 40 },
            [theme.breakpoints.down('sm')]: { fontSize: 35 }
        },
        breadcrumb: {
            mt: '.5rem',
            pb: '1.5rem',
            textAlign: 'center',
            color: '#fff',
            opacity: '.8',
            [theme.breakpoints.up('xm')]: { pb: '3rem' },
            [theme.breakpoints.up('sm')]: { mb: '3rem' }
        },
        breadcrumbItem: {
            color: '#fff',
            fontWeight: 500,
            fontSize: 17
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={styles.breadcrumbBackground}>
                <Box sx={styles.container}>
                    <Typography
                        component={'h2'}
                        sx={styles.title}
                    >
                        Chi Tiết Khóa Học
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Breadcrumbs sx={styles.breadcrumb}>
                            <Link
                                component={RouterLink}
                                to='/'
                                underline='none'
                                sx={{
                                    ...styles.breadcrumbItem,
                                    '&:hover': { color: '#FE79A2' }
                                }}>
                                Trang chủ
                            </Link>
                            <Link
                                component={RouterLink}
                                to='/'
                                underline='none'
                                sx={{
                                    ...styles.breadcrumbItem,
                                    '&:hover': { color: '#FE79A2' }
                                }}>
                                Khóa học
                            </Link>
                            <Typography sx={styles.breadcrumbItem}>Chi tiết khóa học</Typography>
                        </Breadcrumbs>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

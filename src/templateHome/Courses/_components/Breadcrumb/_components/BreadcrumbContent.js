import React from 'react';
import {
    Box, Link,
    Typography,
    Breadcrumbs,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            customLg: 992,
            customMd: 768,
            customSm: 576
        }
    }
})

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
            [theme.breakpoints.up('xl')]: { maxWidth: 'lg' },
            [theme.breakpoints.up('lg')]: { maxWidth: 1140 },
            [theme.breakpoints.up('customLg')]: {
                maxWidth: 960,
                padding: '1.5rem',
                pt: '3rem',
            },
            [theme.breakpoints.up('customMd')]: { maxWidth: 720 },
            [theme.breakpoints.up('customSm')]: { maxWidth: 540 }
        },
        title: {
            color: '#fff',
            fontSize: 45,
            fontWeight: 600,
            textAlign: 'center',
            mt: '3rem',
            [theme.breakpoints.up('customLg')]: { pt: '3rem' },
            [theme.breakpoints.up('custtomSm')]: { pt: '1rem' },
            [theme.breakpoints.down('customLg')]: { fontSize: 40 },
            [theme.breakpoints.down('customMd')]: { fontSize: 35 }
        },
        breadcrumb: {
            mt: '.5rem',
            pb: '1.5rem',
            textAlign: 'center',
            color: '#fff',
            opacity: '.8',
            [theme.breakpoints.up('customSm')]: { pb: '3rem' },
            [theme.breakpoints.up('customMd')]: { mb: '3rem' }
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
                <Box
                    sx={styles.container}
                >
                    <Typography
                        component={'h2'}
                        sx={styles.title}
                    >
                        Các Khóa Học
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Breadcrumbs sx={styles.breadcrumb}>
                            <Link
                                underline='none'
                                href="/"
                                sx={{
                                    ...styles.breadcrumbItem,
                                    '&:hover': { color: '#FE79A2' }
                                }}>
                                Trang chủ
                            </Link>
                            <Typography sx={styles.breadcrumbItem}>Khóa học</Typography>
                        </Breadcrumbs>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
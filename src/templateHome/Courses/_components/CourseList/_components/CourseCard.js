import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Box, Rating, Link
} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React, { Fragment } from 'react'

export default function CourseCard() {
    const styles = {
        root: {
            position: 'realative',
            display: 'flex',
            flexDirection: 'column',
            wordWrap: 'break-word',
            borderRadius: '.5rem',
            background: 'none',
            boxShadow: '0 25px 98px 0 rgba(0,0,0,.04)'
        },
        cardImage: {
            display: 'block',
            width: '100%',
            flexShrink: 0
        },
        cardTitle: {
            textDecoration: 'none',
            mt: '15px',
            display: 'block',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '28px',
            color: '#3f3a64',
            '&:hover': {
                color: '#1545CB'
            }
        },
        cardNormalTextColor: {
            opacity: '.6',
            color: '#666',
        },
        cardFooter: {
            backgroundColor: '#fff',
            padding: '.75rem 1.25rem',
            borderTop: '1px solid rgba(0, 0, 0, .125)',
            borderRadius: '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)'
        },
        courseAuthorText: {
            fontSize: '15px',
            fontWeight: 600,
            display: 'inline-block',
            mx: '10px',
        },
        courseAuthorLink: {
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '28px',
            color: '#3f3a64',
            textDecoration: 'none',
            '&:hover': {
                color: '#1545CB'
            }
        }

    }

    return (
        <Fragment>
            <Card sx={styles.root}>
                <CardMedia
                    component='img'
                    image='./img/course1.jpg'
                    alt=''
                    sx={styles.cardImage}
                />
                <CardContent sx={{ padding: '30px' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                    >
                        <Typography gutterBottom color="primary" fontSize='18px' fontWeight='700'>
                            $35.00
                        </Typography>
                        <Rating name="read-only" value={3} readOnly sx={{ fontSize: '20px' }} />
                    </Box>
                    <Link sx={styles.cardTitle}>
                        Open Programming Courses for everyone : Python
                    </Link>
                    <Box sx={{ display: 'flex', mt: '1.5rem' }}>
                        <Box>
                            <AccessTimeOutlinedIcon sx={{
                                verticalAlign: 'middle',
                                ...styles.cardNormalTextColor
                            }} />
                            <Typography
                                component="span"
                                sx={{
                                    ...styles.cardNormalTextColor,
                                    ml: '5px',
                                    verticalAlign: 'middle'
                                }}
                            >
                                20 hrs
                            </Typography>
                        </Box>
                        <Box sx={{ ml: '20px' }}>
                            <PersonOutlineOutlinedIcon sx={{
                                verticalAlign: 'middle',
                                ...styles.cardNormalTextColor
                            }} />
                            <Typography
                                component="span"
                                sx={{
                                    ...styles.cardNormalTextColor,
                                    ml: '5px',
                                    verticalAlign: 'middle'
                                }}
                            >
                                50
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={styles.cardFooter}>
                    <CardMedia
                        component='img'
                        image='./img/teacher1.jpg'
                        alt=''
                        sx={{
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px'
                        }}
                    />
                    <Typography
                        component='span'
                        sx={{
                            ...styles.courseAuthorText,
                            ...styles.cardNormalTextColor
                        }}
                    >
                        by
                    </Typography>
                    <Link sx={styles.courseAuthorLink}>Olivia</Link>
                    <Typography
                        component='span'
                        sx={{
                            ...styles.courseAuthorText,
                            ...styles.cardNormalTextColor
                        }}
                    >
                        in
                    </Typography>
                    <Link sx={styles.courseAuthorLink}>Programing</Link>
                </CardActions>
            </Card>
        </Fragment>
    )
}

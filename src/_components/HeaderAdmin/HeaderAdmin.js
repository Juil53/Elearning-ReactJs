import { Box, Button, Typography, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { Fragment } from 'react'

export default function HeaderAdmin(props) {
    const { heading, buttonLabel, placeholder, setKeyword, handleSearch } = props;
    const styles = {
        root: {
            paddingBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            '& h1': {
                fontSize: '28px',
                fontWeight: 600,
                width: '50%',
                padding: 0,
            },
            '& button': {
                padding: '10px 24px',
                fontSize: '16px',
                marginLeft: 'auto',
            },
            '& form': {
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                my: '20px',
                '& button': {
                    padding: '10px',
                }
            }
        }
    }

    const handleChangeKeyword = (event) => {
        const { value } = event.target;
        setKeyword(value)
    }

    return (
        <Fragment>
            <Box sx={styles.root}>
                <Typography variant='h1'>{heading}</Typography>
                <Button variant='contained'>{buttonLabel}</Button>
                <Paper component="form">
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} onChange={handleChangeKeyword} />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Fragment>
    )
}

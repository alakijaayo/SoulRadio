import React from 'react';
import { Typography, Card, Button, TextField } from '@material-ui/core';
import useStyles from './SearchSongs.style';

function SearchSongs() {
    const classes = useStyles();

    return (
        <Card
            className={classes.searchCard}
        >
            <TextField
                className={classes.searchText}
                variant="outlined"
                size="small"
            />
            <Button
                className={classes.button}
                color="primary"
                variant="outlined"
            >
                Search
            </Button>
        </Card>
    )
}

export default SearchSongs;
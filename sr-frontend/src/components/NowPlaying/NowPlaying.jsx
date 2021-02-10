import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './NowPlaying.style';

function NowPlaying(props) {
    const classes = useStyles();
    const username = props.username;

    return (
        <Card 
            className={classes.playingCard}
        >
            <Typography>
                Welcome {username}
            </Typography>
        </Card>
    )
}

export default NowPlaying;
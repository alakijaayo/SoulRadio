import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './FrontPage.style';
import SearchSongs from '../SearchSongs/SearchSongs';
import Queue from '../Queue/Queue';
import NowPlaying from '../NowPlaying/NowPlaying';

function FrontPage(props) {
   const loggedIn = props.loggedIn;
   const userName = props.userName;
   const classes = useStyles();

    if (loggedIn !== "true") {
        return (
            <div>
                <Typography
                    variant="h2"
                    align="center"
                    >
                    Welcome To SoulRadio
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    >
                    Login to enjoy the full experience
                </Typography>
            </div>
        )
    }
    
    return (
        <div
            className={classes.root}
        >
            <SearchSongs />
            <NowPlaying
                username= {userName}
            />
            <Queue />
        </div>
    )
}

export default FrontPage;
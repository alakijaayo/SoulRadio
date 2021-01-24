import React from 'react';
import { Typography, Card } from '@material-ui/core';
import useStyles from './FrontPage.style';

function FrontPage(props) {
   const loggedIn = props.loggedIn;
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
        <div>
            <Card
                className={classes.chat}
            >
                <Typography>
                    Chat
                </Typography>
            </Card>
            <Card>
                <Typography>
                    Now Playing
                </Typography>
            </Card>
            <Card>
                <Typography>
                    Search Song
                </Typography>
            </Card>
            <Card>
                <Typography>
                    Queue
                </Typography>
            </Card>
            <Typography>
                Welcome Ayodele
            </Typography>
        </div>
    )
}

export default FrontPage;
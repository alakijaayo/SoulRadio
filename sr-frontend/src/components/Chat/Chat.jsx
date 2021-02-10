import React from 'react';
import { Button, Card } from '@material-ui/core';
import useStyles from './Chat.style';

function Chat() {
    const classes = useStyles();

    return (
        <Card
            className={classes.chatCard}
        >
        </Card>
    )
}

export default Chat;
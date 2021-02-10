import React from 'react';
import { Card } from '@material-ui/core';
import useStyles from './Queue.style';

function Queue() {
    const classes = useStyles();

    return (
        <Card
            className={classes.queueCard}
        >

        </Card>
    )
}

export default Queue;
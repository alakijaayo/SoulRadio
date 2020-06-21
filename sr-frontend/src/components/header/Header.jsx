import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Header.style'

export default function Header() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="h1"
                        noWrap
                    >
                        SoulRadio
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
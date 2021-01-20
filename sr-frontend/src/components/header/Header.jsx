import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './Header.style';

export default function Header() {
    const styles = useStyles();
    const host = process.env.NODE_ENV === 'production' ? "https://soulradio.herokuapp.com/login?version=production" : "http://localhost:8080/login?version=development"

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar className={styles.toolbar}>
                    <Typography
                        className={styles.title}
                        variant="h6"
                        noWrap
                    >
                        SoulRadio
                    </Typography>
                    <Button
                        color="inherit"
                        variant="outlined"
                        href={host}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

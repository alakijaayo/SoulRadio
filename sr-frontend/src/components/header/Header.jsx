import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './Header.style';

export default function Header() {
    const styles = useStyles();

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
                        onClick={() => fetch('/login')}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

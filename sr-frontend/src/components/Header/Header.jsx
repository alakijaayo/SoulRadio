import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Header.style';
import LoginButton from '../LoginButton/LoginButton';

function Header() {
    const styles = useStyles();
    const loginHost = process.env.NODE_ENV === 'production' ? "https://soulradio.herokuapp.com/login?version=production" : "http://localhost:8080/login?version=development";
    const logoutHost = process.env.NODE_ENV === 'production' ? "https://soulradio.herokuapp.com" : "http://localhost:3000";
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const loggedIn = params.get('userLoggedIn')

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
                    <LoginButton
                        loggedIn={loggedIn}
                        login={loginHost}
                        logout={logoutHost}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import useStyles from './Header.style';
import LoginButton from '../LoginButton/LoginButton';

function Header(props) {
    const styles = useStyles();
    const loginHost = process.env.NODE_ENV === 'production' ? "https://soulradio.herokuapp.com/login?version=production" : "http://localhost:8080/login?version=development";
    const logoutHost = process.env.NODE_ENV === 'production' ? "https://soulradio.herokuapp.com" : "http://localhost:3000";
    const loggedIn = props.loggedIn;

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar className={styles.toolbar}>
                    {loggedIn === 'true' ?
                    <Avatar
                        className={styles.avatar}
                    ></Avatar>
                    :
                    <Avatar
                        className={styles.avatar}
                    >HI</Avatar>
                    }
                    <Typography
                        className={styles.title}
                        variant="h6"
                        component="h1"
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
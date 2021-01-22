import React from  'react';
import  { Button } from '@material-ui/core';

function LoginButton(props) {

    if (props.loggedIn === "true") {
        return (
            <Button
                color="inherit"
                variant="outlined"
                href={props.logout}
            >
                Logout
            </Button>
        )
    }

    return (
        <Button
            color="inherit"
            variant="outlined"
            href={props.login}
        >
            Login
        </Button>
    )

}

export default LoginButton;
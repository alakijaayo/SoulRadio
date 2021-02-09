import React from 'react';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
    const query = window.location.href;
    const data = query.includes("http://localhost:3000/") ? query.replace("http://localhost:3000/", "") : query.replace("https://soulradio.herokuapp.com/", "");
    const userLog = Buffer.from(data, 'base64').toString('ascii')
    const info = userLog.split("/")
    const loggedIn = info[0].replace("userLoggedIn=", "");
    const userName = info[1];

    console.log(userName);

    return (
        <div className="App">
            <Header
                loggedIn={loggedIn}
            />
            <FrontPage
                loggedIn={loggedIn}
                userName={userName}
            />
        </div>
    );
}

export default App;

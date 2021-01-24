import React from 'react';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const loggedIn = params.get('userLoggedIn');

    return (
        <div className="App">
            <Header
                loggedIn={loggedIn}
            />
            <FrontPage
                loggedIn={loggedIn}
            />
        </div>
    );
}

export default App;

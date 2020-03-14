import React from 'react';
import Routes from './routes';
import './App.css';

function App() {

    let qtdTotal = 0
    localStorage.setItem('qtdTotal', qtdTotal);

    return (
        <>
            <div className="menu">
                Smartphones
            </div>
            <div className="container">
                <div className="content">
                    <Routes />
                </div>
            </div>
        </>
    );
}

export default App;
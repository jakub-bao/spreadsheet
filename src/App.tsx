import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Router from "./modules/router.component";

function App() {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={'/'}><span>React Spreadsheet Demo</span></Link>
            {/*<NavigationMenu/>*/}
        </header>
        <div className='content'>
            <Router/>
        </div>
    </div>
}

export default App;

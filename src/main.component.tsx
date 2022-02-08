import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import ContentRouter from "./modules/elements/contentRouter.component";
import Header from "./modules/elements/header.component";

const styles = {
    root: {
        margin: 0
    }
}

function Main() {
    return <>
        <Header/>
        <ContentRouter/>
    </>
}

export default Main;

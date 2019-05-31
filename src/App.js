import React from 'react';
import {
    BrowserRouter as Router,
    Route
}   from "react-router-dom";
import Home from './pages/home/home'
import './App.css';
import MainNav from "./components/nav";
import {utils} from "./utils";

const style = {
    color: utils.colors.mainBlack
};

const content = {
    marginTop: utils.navHeight,
};

function App() {
    return (
        <Router>
            <div style={style}>
                <MainNav/>
                <div style={content}>
                    <Route exact path="/" component={Home}/>
                </div>
            </div>
        </Router>
    );
}

export default App;

import React, { Component} from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
}from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Gallery from "../Gallery";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>My Project T-shirt Store</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/stuff" element={<Stuff/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
                </div>
            <footer>
                Chase Forbes
                Email: chafor0872@students.ecpi.edu
            </footer>
            </div>
            </HashRouter>
        );
    }
}
export default Main;
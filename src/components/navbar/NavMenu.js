import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";

function NavMenu() {
    return (
        <Router>
            <Navbar role="navigation" expand="sm" className="navbarTop">
                <Navbar.Brand className="navbarTop__title">
                    <NavLink to="/" exact role="link" className="navbarTop__title--text">
                    Home
                    </NavLink>
                </Navbar.Brand>

                {/* hamburger menu */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-auto navbarTop__link">
                    <NavLink
                    to="/"
                    exact
                    className="navbarTop__link--item"
                    role="link"
                    >
                    HOME
                    </NavLink>
                    <NavLink
                    to="/experience"
                    className="navbarTop__link--item"
                    role="link"
                    >
                    EXPERIENCE
                    </NavLink>  
                    <NavLink
                    to="/contact"
                    className="navbarTop__link--item"
                    role="link"
                    >
                    CONTACT
                    </NavLink>  
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Container>
        </Router>
    )
}

export default NavMenu

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from '../pages/Home';
import Wallets from '../pages/Wallets';
import Games from '../pages/Games';
import Login from './Login';

export default class NavbarComp extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to={"/"}>GamBit</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/wallets"}>Wallets</Nav.Link>
                                <NavDropdown title="Games" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/games">FlyJet</NavDropdown.Item>

                                <NavDropdown.Divider />
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={"/signin"}>Login</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/wallets" element={<Wallets/>} />
                            <Route path="/games" element={<Games/>} />
                            <Route path="/signin" element={<Login/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
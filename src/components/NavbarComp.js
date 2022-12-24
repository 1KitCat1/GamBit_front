import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Wallets from '../pages/Wallets';
import Games from '../pages/Games';
import Login from './Login';
import Cookies from "js-cookie";
import { FormattedMessage } from "react-intl";
import { useSignOut } from "react-auth-kit";

const NavbarComp = () => {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const signOut = useSignOut();

  useEffect(() => {
    let userData = Cookies.get("_auth_state");
    if (userData != null) {
      setName(JSON.parse(userData).data.username);
      setRoles(JSON.parse(userData).data.roles);
    }
  }, []);

  return (
          <div>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                      <Navbar.Brand as={Link} to={"/"}>GamBit</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to={"/"}>
                            <FormattedMessage id="home" />{" "}
                          </Nav.Link>

                          <Nav.Link as={Link} to={"/wallets"}>
                            <FormattedMessage id="wallets" />{" "}
                          </Nav.Link>
                          
                          <NavDropdown  title={<FormattedMessage id="games" />} id="collasible-nav-dropdown">
                          <NavDropdown.Item href="/games">
                            FlyJet
                          </NavDropdown.Item>
                          
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/games">
                            <FormattedMessage id="monopoly" />{" "}
                          </NavDropdown.Item>
                          
                          </NavDropdown>
                      </Nav>
                      <Nav>
                      {Cookies.get("_auth") != null ? (
                        <>
                          <Nav.Link as={Link} to={"/profile"}>
                            <FormattedMessage id="loggedinas" />{" "}
                            <span style={{ color: "#FED049" }}>{name}</span>
                          </Nav.Link>
                          <Nav.Link
                            onClick={() => {
                              signOut();
                              window.location.reload(false);
                            }}
                            className="btn btn-warning text-black"
                            as={Link}
                            to={"/"}
                          >
                            <FormattedMessage id="logout" />
                          </Nav.Link>
                        </>
                      ) : (
                        <>
                          <Nav.Link as={Link} to={"/signup"}>
                            <FormattedMessage id="signup" />
                          </Nav.Link>
                          <Nav.Link
                            className="btn btn-warning text-black"
                            as={Link}
                            to={"/signin"}
                          >
                            <FormattedMessage id="signin" />
                          </Nav.Link>
                        </>
                      )}
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
  );
    
}

export default NavbarComp;
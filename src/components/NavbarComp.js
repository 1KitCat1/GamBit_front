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
import Register from './Register';
import Login from './Login';
import Cookies from "js-cookie";
import { FormattedMessage } from "react-intl";
import { useSignOut } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import ManageUsers from './controlPanels/ManageUsers';
import NotFoundPage from "./NotFound.js"

const NavbarComp = () => {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const signOut = useSignOut();

  useEffect(() => {
    let userData = Cookies.get("_auth_state");
    if (userData != null) {
      setName(JSON.parse(userData).data.username);
      let strRoles = JSON.parse(userData).data.roles;
      strRoles = strRoles.substr(1, strRoles.length-2);
      setRoles(strRoles.split(", "));
    }
  }, []);

  const isAdmin = () => {
    for(let role of roles) {
      if(role == "ROLE_ADMIN") return true;
    }
    return false;
  }
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
                      {Cookies.get("_auth") != null &&
                      isAdmin() ? (
                          <NavDropdown
                            title={<FormattedMessage id="admpanel" />}
                            id="collasible-nav-dropdown"
                          >
                            <NavDropdown.Item as={Link} to={"/manageUsers"}>
                              <FormattedMessage id="users" />
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/manageStops"}>
                              <FormattedMessage id="networks" />
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/#"}>
                              <FormattedMessage id="contracts" />
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/#"}>
                              <FormattedMessage id="games" />
                            </NavDropdown.Item>
                          </NavDropdown>
                        ) : (
                          <></>
                        )}

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
                      <Route path="/signin" element={<Login/>} />
                      <Route path="/signup" element={<Register/>} />
                      <Route
                        path="/wallets"
                        element={
                          <RequireAuth loginPath="/signin">
                            <Wallets />
                          </RequireAuth>
                        }
                      />
                      <Route
                        path="/games"
                        element={
                          <RequireAuth loginPath="/signin">
                            <Games />
                          </RequireAuth>
                        }
                      />
                      <Route
                        path="/manageUsers"
                        element={
                          <RequireAuth loginPath="/signin">
                            <ManageUsers />
                          </RequireAuth>
                        }
                      />
                      <Route path="*" element={<NotFoundPage />} />
                  </Routes>
              </div>
          </div>
  );
    
}

export default NavbarComp;
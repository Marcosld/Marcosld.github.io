import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.css'

function NavBar(){
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Marcos Luis Delgado</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Portfolio
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
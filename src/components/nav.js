import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import styled from "styled-components";
import {utils} from "../utils";
import MainButton from "./buttonRounded";

const Styles = styled.div`
    .navbar {
        height: ${utils.navHeight};
        padding-left: 100px;
        padding-right: 100px;
        font-family: Roboto-Medium;
        background-color: white !important;
        box-shadow: 0 0 8px hsla(0, 0%, 11%, 0.11) !important;
    }
    
    .navbar .nav-link {
        color: ${utils.colors.mainBlack};
        margin-left: 20px;
    }
    
    .navbar-brand {
        color: ${utils.colors.mainBlue};
        font-family: Roboto-Bold;
        font-size: 28px;
    }
    
    .navbar-brand:hover, .navbar-brand:focus {
        color: ${utils.colors.mainBlue};
    }
`;

class MainNav extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar bg="light" expand="lg" className="fixed-top">
                    <Navbar.Brand href="#home">Kine+</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Accueil</Nav.Link>
                            <Nav.Link href="#link">Tarifs</Nav.Link>
                            <NavDropdown title="Ressources" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <MainButton color={utils.colors.mainGreen} text="Essai Gratuit" primary/>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default MainNav;

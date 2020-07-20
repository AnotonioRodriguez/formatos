import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar{
        
        background: #F98016;
    }

    .navbar-brand, .navbar-nav .nav-link{
       
        color: #FFFFFF;
        font-size: 22px;
        
        &:hover{
            
            color: White;
        }
    }
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand= "lg" >
            <Navbar.Brand href="/">Dulces el Foraneo</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/home">Inicio</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contacto</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Informacion</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href="/noMatch">Galeria</Nav.Link> </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
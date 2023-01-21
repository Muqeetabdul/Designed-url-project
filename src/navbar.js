import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';



const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg"  >
                <Container style={{ height: 70, marginLeft : 0}} className="navstyle">
                    <Navbar.Brand href="/inputshort.js">Shorty</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href='/inputshort.js'>Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href='/history.js'>History</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';



const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Container style={{ height: 70, marginLeft : 0}} className="navstyle">
                    <Link to="/"><span>Shorty</span></Link>
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link href="#link">About</Link>
                            <Link href="#link">Contour</Link>
                            <Link to='/History'>History</Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
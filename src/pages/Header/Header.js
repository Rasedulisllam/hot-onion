import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import brandIcon from '../../image/logo/logo2.png'
import {FiShoppingCart} from 'react-icons/fi';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand style={{width:'9rem'}}><img className='img-fluid' src={brandIcon} alt="brand icon" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end text-black">
                    <Nav.Link className='text-black fw-bold' href="#action1"><FiShoppingCart /></Nav.Link>
                    <Nav.Link className='text-black fw-bold' href="#action1">Home</Nav.Link>
                    <Nav.Link className='text-black fw-bold'  href="#action2">Login</Nav.Link>
                    <Button variant="danger" className='hot-btn'>Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
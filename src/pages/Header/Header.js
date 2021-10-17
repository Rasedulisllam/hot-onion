import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import brandIcon from '../../image/logo/logo2.png'
import {FiShoppingCart} from 'react-icons/fi';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand style={{width:'9rem'}}><img className='img-fluid' src={brandIcon} alt="brand icon" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end text-black">
                    <Nav.Link as={Link} className='text-black fw-bold' href="#action1"><FiShoppingCart /></Nav.Link>
                    <Nav.Link as={Link} className='text-black fw-bold' to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} className='text-black fw-bold' to='/login'>Login</Nav.Link>
                    <Link to='/register'><Button variant="danger" className='hot-btn'>Sign Up</Button></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
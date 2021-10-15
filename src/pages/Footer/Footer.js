import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brandFooter from '../../image/logo/logo.png'

const Footer = () => {
    return (
        <div className='bg-dark p-5'>
            <Container>
                <Row>
                    <Col className='text-start' md={6}>
                        <img width='100px' src={brandFooter} alt="" />
                    </Col>
                    <Col md={3}>
                        <ul className='text-white p-0 text-start list-unstyled'>
                            <li>About online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurent</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className='text-white p-0 text-start list-unstyled'>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all clitis</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
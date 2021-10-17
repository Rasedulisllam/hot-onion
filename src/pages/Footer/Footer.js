
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
                <Row className='mt-5'>
                    <Col md={6} className='text-secondary p-0 text-start'>
                        <span>&copy;Copyright 2021 hot onion</span>
                    </Col>
                    <Col md={6} className='text-white text-start'>
                        <span className='px-4'>Privacy policy</span>
                        <span className='px-4'>Terms of Use</span>
                        <span className='px-4'>Pricing</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
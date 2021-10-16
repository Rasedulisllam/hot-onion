import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';

const ChooseItem = props => {
    const {name,img,details}=props.data
    return (
        <Col>
        <Card className='border-0'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-start'>
                <Card.Title className='fs-4'>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <h5 className='text-success'>see more <FaArrowCircleRight/></h5>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ChooseItem;
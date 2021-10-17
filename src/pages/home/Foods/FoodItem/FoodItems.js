import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './FoodItems.css'

const FoodItem = props => {
    const {name,img,details,price,key}=props.food;
    const history =useHistory();

    const handleDetails=()=>{
        history.push(`/foodDetail/${key}`)
    }
    return (
        <Col>
            <Card className="food-card border-0 p-4" onClick={handleDetails}>
                <Card.Img className="w-50 mx-auto" variant="top" src={img} />
                <Card.Body className='mt-3'>
                <Card.Title className='fs-5'>{name}</Card.Title>
                <Card.Text >
                   {details}
                </Card.Text>
                <Card.Text className='fs-4 fw-bold'>
                   {price}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FoodItem;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChooseItem from '../ChooseItem/ChooseItem';

const ChooseUs = () => {

    const chooseData=[
        {
            id:1,
            name:'Fast delivery',
            img:'https://i.ibb.co/vXDXdj3/adult-blur-blurred-background-687824.png',
            details:'It is my pleasure to offer my very highest regards and recommendation to The Restaurant Group. Their diverse yet complimentary blend of individual talents allows them to be truly.',
        },
        {
            id:2,
            name:'A good auto responder',
            img:'https://i.ibb.co/K0RryGr/chef-cook-food-33614.png',
            details:'It is my pleasure to offer my very highest regards and recommendation to The Restaurant Group. Their diverse yet complimentary blend of individual talents allows them to be truly.',
        },
        {
            id:3,
            name:'Home delivery',
            img:'https://i.ibb.co/ryDS84p/architecture-building-city-2047397.png',
            details:'It is my pleasure to offer my very highest regards and recommendation to The Restaurant Group. Their diverse yet complimentary blend of individual talents allows them to be truly.',
        },
    ]
    return (
        <Container className='my-5'>
            <div className="text-start my-4">
                <h2>Why You Choose us</h2>
                <p className='w-50'>We have trusted resources for every imaginable need: designers, contractors, point of sales systems, kitchen equipment, software, glassware and everything in between.</p>
            </div>
            <Row xs={1} md={3} className="g-4">
              {
                  chooseData.map(item => <ChooseItem data={item}></ChooseItem>)
              }
            </Row>
        </Container>
    );
};

export default ChooseUs;

// https://i.ibb.co/vXDXdj3/adult-blur-blurred-background-687824.png
// https://i.ibb.co/ryDS84p/architecture-building-city-2047397.png
// https://i.ibb.co/K0RryGr/chef-cook-food-33614.png

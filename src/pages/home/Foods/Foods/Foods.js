import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodItem from '../FoodItem/FoodItems';
import './Foods.css'

const Foods = () => {
    const [foods,setFoods]=useState([])

    useEffect(()=>{
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    },[])

    const lunchFoods=foods.filter(food=> food.deshType==='lunch');
    const breakFastFoods=foods.filter(food=> food.deshType==='breakfast');
    const dinnerFoods=foods.filter(food=> food.deshType==='dinner');
   
    return (
        <Container className='my-3'>
            <Tabs>
                <TabList className="border-0 tab my-5">
                    <Tab className='tab-btn'>Brackfast</Tab>
                    <Tab className='tab-btn' >Lunch</Tab>
                    <Tab className='tab-btn'>dinner</Tab>
                </TabList>

                <TabPanel>
                    <Row xs={1} md={3} className="g-5">
                        {
                            breakFastFoods.map(food=> <FoodItem food={food} key={food.key}></FoodItem> )
                        }
                    </Row>
                </TabPanel>
                <TabPanel>
                    <Row xs={1} md={3} className="g-5">
                        {
                            lunchFoods.map(food=> <FoodItem food={food}  key={food.key}></FoodItem> )
                        }
                    </Row>
                </TabPanel>
                <TabPanel>
                     <Row xs={1} md={3} className="g-5">
                        {
                            dinnerFoods.map(food=> <FoodItem food={food}  key={food.key}></FoodItem> )
                        }
                    </Row>
                </TabPanel>
            </Tabs>
            <Button variant='secondary' className='my-4'>Checkout your Food</Button>
        </Container>
    );
};

export default Foods;
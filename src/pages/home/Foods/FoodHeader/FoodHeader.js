import React from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';
import './foodHeader.css'

const FoodHeader = props => {
    const {setDeshType}=props.setdeshtype;
    // console.log(props.setdeshtype)
    return (
        <div className='text-center'>
              <ButtonGroup className="mb-3">
                <Button onClick={()=>setDeshType('brackfast')} className='food-btn' variant="outline-secondary">Brackfast</Button>
                <Button onClick={()=>setDeshType('lunch')} className='food-btn' variant="outline-secondary">Lunch</Button>
                <Button onClick={()=>setDeshType('dinner')} className='food-btn' variant="outline-secondary">Dinner</Button>
            </ButtonGroup>
        </div>
    );
};

export default FoodHeader;
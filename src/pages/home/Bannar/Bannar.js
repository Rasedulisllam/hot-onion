import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Bannar.css'

const Bannar = () => {
    return (
        <div className='bannar'>
            <h1 className='mb-4'>Best food waiting for your belly</h1>
            <div className="search-box mx-auto position-relative">
                <Form.Control className='search-field' type="text" placeholder="Search foods" />
                <Button className='hot-btn search-btn' variant='danger'>Search</Button>
            </div>
        </div>
    );
};

export default Bannar;
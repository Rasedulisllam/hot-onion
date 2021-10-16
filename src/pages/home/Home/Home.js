import React from 'react';
import Bannar from '../Bannar/Bannar';
import ChooseUs from '../ChooseUs/ChooseUs';
import Food from '../Foods/Food/Food';
import Foods from '../Foods/Foods/Foods';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Foods></Foods>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;
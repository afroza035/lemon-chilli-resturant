import React from 'react';
import Testimonial from '../../Home/Testimonial/Testimonial';
import Delicious from '../Delicious/Delicious';
import MenuHeader from '../MenuHeader/MenuHeader';

const Menu = () => {
    return (
        <div>
            <MenuHeader/>
            <Delicious/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Menu;
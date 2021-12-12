import React from 'react';
import Navbar from './navbar'
import Burger from './burger'
import useMediaQuery from '../utils/useMediaQuery';

const Header = () => {
    const isQuery = useMediaQuery('(max-width: 975px)');
    return (
        <>{isQuery ? <Burger /> : <Navbar />}</>
    );
};

export default Header;
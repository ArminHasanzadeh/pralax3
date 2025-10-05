import React from 'react';
import MainButTop from './component/MainButTop';
import MainButMid from './component/MainButMid';
import MainButBut from './component/MainButBut';

function MainBut(props) {
    return (
        <>
            <MainButTop />
            <MainButMid />
            <MainButBut />
        </>
    );
}

export default MainBut;
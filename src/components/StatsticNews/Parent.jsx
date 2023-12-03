import React from 'react';
import Staststic from './Staststic';
import News from './News';
import './Parent.css'

const Parent = ({ darkLight }) => {
    return (
        <div>
            <Staststic darkLight={darkLight} />
            <News darkLight={darkLight} />
        </div>
    );
}

export default Parent;
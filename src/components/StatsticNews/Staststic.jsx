import React from 'react';
import './Staststic.css'
import light from './../../assets/img/Staststic-light.png'
const Staststic = () => {
    return (
        <div className='staststic text-center '>
            <p>أهم الإحصائيات</p>
            <img src={light} alt="" />
        </div>
    );
}

export default Staststic;

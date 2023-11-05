import React from 'react';
import './Preseident.css'
import bg from './../../assets/img/bg-section.png';
const Preseident = () => {
    return (
        <div className='Prese d-flex justify-content-between align align-items-center flex-wrap text-center'>
            <img src={bg} alt="img" />
            <p>الاشادة السامية <br></br><span>لسيادة رئيس الجمهورية العربية السورية</span> بشار حافظ الاسد - حفظه الله ورعاه<br></br> قائد العملية الاقتصادية وتطوير البلاد</p>
        </div>
    );
}

export default Preseident;

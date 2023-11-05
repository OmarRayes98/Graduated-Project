import React from 'react';
import './News.css'
import Carousel from 'react-bootstrap/Carousel';
import imge from './../../assets/img/LastNews.png'
const News = () => {
    return (
        <div>
            <p className='title'>أخر الاخبار</p>
            <div className="m-slider m-auto ">
                <Carousel data-bs-theme="dark" style={{ backgroundColor: "#222325", borderRadius: "16px" }}>
                    <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-center  '>
                            <div className="info">
                                <h2>02 أكتوبر 2023</h2>
                                <p>إيقاف تصدير مادة بطاطا الطعام
                                    لغاية 2023/11/1</p>
                                <button>أقرأ المزيد</button>
                            </div>
                            <img src={imge} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-center'>
                            <div className="info">
                                <h2>02 أكتوبر 2023</h2>
                                <p>إيقاف تصدير مادة بطاطا الطعام
                                    لغاية 2023/11/1</p>
                                <button>أقرأ المزيد</button>
                            </div>
                            <img src={imge} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-center'>
                            <div className="info">
                                <h2>02 أكتوبر 2023</h2>
                                <p>إيقاف تصدير مادة بطاطا الطعام
                                    لغاية 2023/11/1</p>
                                <button>أقرأ المزيد</button>
                            </div>
                            <img src={imge} alt="" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <p className='more'>شاهد المزيد</p>
        </div >
    );
}

export default News;

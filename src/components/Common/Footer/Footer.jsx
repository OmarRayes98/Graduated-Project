import React from 'react';
import logo from './../../../assets/img/logo2.svg'
import facebook from './../../../assets/img/facebook.png'
import insta from './../../../assets/img/insta.png'
import linkedn from './../../../assets/img/linkedn.png'
import tweeter from './../../../assets/img/tweeter.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-bg'>
            <Container fluid>
                <Row className=' justify-content-center justify-content-md-between gap-106'>
                    <Col className=' flex-grow-0  ' xs={6} md={4} >

                        <p>الصفحة الرئيسية</p>
                        <p>عن الوزارة</p>
                        <p>مهام</p>
                        <p>النشرة الاقتصادية</p>
                        <p>قوانين</p>

                    </Col>
                    <Col className=' flex-grow-0  ' xs={6} md={4}>
                        <p>استثمر في سوريا</p>
                        <p>خدمات</p>
                        <p>الشكاوى الالكترونية</p>
                        <p>توجيهات قانونية</p>
                        <p>اتصل بنا</p>
                    </Col>

                    <Col className=' flex-grow-0 text-center  ' xs={6} md={4}>
                        <img src={logo} alt="logo" />
                        <p className=' mx-auto '>الجمهورية العربية السورية</p>
                        <p className=' mx-auto '>وزارة الاقتصاد والتجارة الخارجية</p>

                    </Col>

                </Row>
                <div className='d-flex justify-content-center justify-content-md-between copy flex-wrap-reverse '>
                    <p className='fs-6 text'>جميع الحقوق محفوظة لوزارة الاقتصاد والتجارة الخارجية - الجمهورية العربية السورية © 2023</p>
                    <div className='d-flex gap-4 social'>
                        <img src={linkedn} alt="" />
                        <img src={insta} alt="" />
                        <img src={tweeter} alt="" />
                        <img src={facebook} alt="" />
                    </div>



                </div>
            </Container>

        </footer>
    );
}

export default Footer;

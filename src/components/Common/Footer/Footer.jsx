import logo from './../../../assets/img/logo2.svg'
import facebook from './../../../assets/img/facebook.png'
import insta from './../../../assets/img/insta.png'
import linkedn from './../../../assets/img/linkedn.png'
import tweeter from './../../../assets/img/tweeter.png'
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './Footer.css'

const Footer = () => {

    const { t  } = useTranslation();


    return (
        <footer className='footer-bg'>
            <Container fluid>
                <Row className=' justify-content-center justify-content-md-between gap-106'>
                    <Col className=' flex-grow-0  ' xs={6} md={4} >

                        <p>{t('label.home')}</p>
                        <p>{t('label.About')}</p>
                        <p>{t('label.Tasks')}</p>
                        <p>{t('label.Economic')}</p>
                        <p>{t('label.laws')}</p>

                    </Col>
                    <Col className=' flex-grow-0  ' xs={6} md={4}>
                        <p>{t('label.Invest')}</p>
                        <p>{t('label.Services')}</p>
                        <p>{t('label.Electronic')}</p>
                        <p>{t('label.Legal')} </p>
                        <p>{t('label.contact')}</p>
                    </Col>

                    <Col className=' flex-grow-0 text-center' xs={6} md={4}>
                        <img src={logo} alt="logo" />
                        <p className=' mx-auto '>{t('label.Syria')}</p>
                        <p className=' mx-auto '>{t('label.Title')}</p>

                    </Col>

                </Row>
                <div className='d-flex justify-content-center justify-content-md-between copy flex-wrap-reverse '>
                    <p className='fs-6 text'>{t('label.Rights')}</p>
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

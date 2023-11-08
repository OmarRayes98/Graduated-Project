import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import Background from './../../assets/img/Background.png'

const Hero = () => {
    return (
        <Carousel className='vh-100'>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={Background}
                    alt="First slide"
                />
                <div className='position-absolute top-50 start-50 z-index-2 translate-middle text-center '>
                    <h1>وزارة الاقتصاد والتجارة الاقتصادية</h1>
                    <p>ندعم رحلتك الاستثمارية</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>

            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={Background}
                    alt="Second slide"
                />
                <div className='position-absolute top-50 start-50 z-index-2 translate-middle text-center '>
                    <h1>وزارة الاقتصاد والتجارة الاقتصادية</h1>
                    <p>ندعم رحلتك الاستثمارية</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={Background}
                    alt="Third slide"
                />
                <div className='position-absolute top-50 start-50 z-index-2 translate-middle text-center '>
                    <h1>وزارة الاقتصاد والتجارة الاقتصادية</h1>
                    <p>ندعم رحلتك الاستثمارية</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;

import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
// import Background from './../../assets/img/Background.png'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarusalTexts } from "../../redux/mainSlice/main.action"



const Hero = () => {
    const dispatch = useDispatch();

    const { t , i18n } = useTranslation();

    const {carusalImages , carusalText } = useSelector((state) => state.mainSlice);

    
    useEffect(()=>{

        if(Object.keys(carusalText).length===2 ){ // to prevent request api after store array of ar or en
            return;
        }
        
        dispatch(fetchCarusalTexts(i18n.language));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch,i18n.language])


    return (
        <>
        {carusalText[i18n.language]&&
        <Carousel className='vh-100'>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={carusalImages.length >0 ? carusalImages[0].image : undefined}
                    alt="First slide"
                />
                <div className='position-absolute top-50 start-50  translate-middle text-center text-z'>
                    <h1>{t('title.titleCarsoual')}</h1>
                    <p>{
                        
                    carusalText[i18n.language] && carusalText[i18n.language][0]['description'+i18n.language]
                    }</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>

            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={carusalImages.length >0  ? carusalImages[1].image : undefined}
                    alt="Second slide"
                />
                <div className='position-absolute top-50 start-50  translate-middle text-center text-z'>
                    <h1>{t('title.titleCarsoual')}</h1>
                    <p>{ carusalText[i18n.language] && carusalText[i18n.language][1]['description'+i18n.language]}</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100 vh-100"
                    src={carusalImages.length >0  ? carusalImages[2].image : undefined}
                    alt="Third slide"
                />
                <div className='position-absolute top-50 start-50  translate-middle text-center text-z'>
                    <h1>{t('title.titleCarsoual')}</h1>
                    <p>{ carusalText[i18n.language] && carusalText[i18n.language][2]['description'+i18n.language]}</p>
                    <input type="text" placeholder='ابحث' className='border-0' />
                </div>
                <div className="overlay"></div>

            </Carousel.Item>
        </Carousel>
        }
        </>
    );
}

export default Hero;

import './News.css'
import Carousel from 'react-bootstrap/Carousel';
import imge from './../../assets/img/LastNews.png'
import imge2 from './../../assets/img/LastNews2.png'
import imge3 from './../../assets/img/LastNews3.png'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';
import { fetchNewsTexts } from "../../redux/mainSlice/main.action"



const News = ({ darkLight }) => {

    const dispatch = useDispatch();
    const { t , i18n } = useTranslation();


    const {news} = useSelector((state) => state.mainSlice);

    useEffect(()=>{

        if(Object.keys(news).length===2 ){ // to prevent request api after store array of ar or en
            return;
        }
        
        dispatch(fetchNewsTexts(i18n.language));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch,i18n.language])



    return (
        <div>
            <p className='title'>{t('title.lastNews')}</p>
            <div className="m-slider m-auto ">
                <Carousel data-bs-theme="dark" style={{ backgroundColor: (darkLight) ? "#222325" : "#FAFAFA", borderRadius: "16px" }} className={(darkLight) ? "" : "darkColor"}>
                    
                <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-between'>
                            <div className="info">
                            <h2>{ news[i18n.language] && news[i18n.language][0]['published_at']}</h2>
                                <p>{ news[i18n.language] && news[i18n.language][0]['name'+i18n.language]}</p>
                                <button>{t('title.more')}<hr className='hr' /></button>
                            </div>
                            {/* <img src={news.length >1  ? news[1].image : undefined} alt="" /> */}
                            <img src={imge2} alt="" />

                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-between'>
                            <div className="info">
                            <h2>{ news[i18n.language] && news[i18n.language][1]['published_at']}</h2>
                                <p>{ news[i18n.language] && news[i18n.language][1]['name'+i18n.language]}</p>
                                <button>{t('title.more')}<hr className='hr' /></button>
                            </div>
                            {/* <img src={news.length >1  ? news[1].image : undefined} alt="" /> */}
                            <img src={imge} alt="" />

                        </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className=' d-flex w-100 flex-wrap justify-content-between'>
                            <div className="info">
                            <h2>{ news[i18n.language] && news[i18n.language][2]['published_at']}</h2>
                                <p>{ news[i18n.language] && news[i18n.language][2]['name'+i18n.language]}</p>
                                <button>{t('title.more')}<hr className='hr' /></button>
                            </div>
                            {/* <img src={news.length >2  ? news[2].image : undefined} alt="" /> */}
                            <img src={imge3} alt="" />

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <p className={(darkLight) ? "more" : "more darkColor"}>{t('title.watchMore')}</p>
        </div >
    );
}

export default News;

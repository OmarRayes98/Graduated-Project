import NavBar from "../../components/Common/Navbar/NavBar"
import Footer from "../../components/Common/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Preseident from "../../components/Preseident/Preseident"
import Parent from "../../components/StatsticNews/Parent"
import Text from "../../components/Text/Text"
import { useEffect, useState } from "react"
import './Home.css'
import { useDispatch, useSelector  } from 'react-redux';

import { useTranslation } from "react-i18next"
import Loading from "../../components/Common/Loading/Loading"
import { fetchCarusalImages  } from "../../redux/mainSlice/main.action"

const Home = () => {
    const { loadingImages , carusalImages} = useSelector((state) => state.mainSlice);

    const [darkLight, setdarkLight] = useState(false);
    const { i18n } = useTranslation();

    const appClasses = i18n.language === 'ar' ? 'rtl' : '';
    const dispatch = useDispatch();

    useEffect(()=>{

        if(carusalImages.length >0){
        return;
        }
        
        dispatch(fetchCarusalImages())

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])
    
    return (
        <div className={ `${appClasses} ${(darkLight) ? "home" : "home dark"}`}>
            
            {
            loadingImages ?
            <Loading/>
             :
             <>
            <NavBar darkMode={setdarkLight} darkLight={darkLight} />
            <Hero />
            <Text />
            <Preseident />
            <Parent darkLight={darkLight} />
            <Footer />
            </>
            }
        </div>
    )


}

export default Home

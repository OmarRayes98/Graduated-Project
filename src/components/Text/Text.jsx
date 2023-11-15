import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';
import { fetchAboutTexts } from "../../redux/mainSlice/main.action"
import { useTranslation } from 'react-i18next';


import './Text.css';


const Text = () => {

    const dispatch = useDispatch();
    const {aboutText } = useSelector((state) => state.mainSlice);
    const {  i18n } = useTranslation();

    useEffect(()=>{

        if(Object.keys(aboutText).length===2 ){ // to prevent request api after store array of ar or en
            return;
        }
        
        dispatch(fetchAboutTexts(i18n.language));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch,i18n.language])




    return (
        <div>
            <p className='workspace'>
                {aboutText[i18n.language] && aboutText[i18n.language][0]['text1'+i18n.language]}
            </p>


        </div>
    );
}

export default Text;

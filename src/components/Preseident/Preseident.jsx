import { useSelector  } from 'react-redux';
import { useTranslation } from 'react-i18next';

import "./Preseident.css";
import bg from "./../../assets/img/bg-section.png";
const Preseident = () => {

  const {aboutText } = useSelector((state) => state.mainSlice);
  const {  i18n } = useTranslation();


  return (
<div className='Prese d-flex justify-content-between align align-items-center flex-wrap text-center'>
            <img src={bg} alt="img" />
            <p>الاشادة السامية <br></br><span>لسيادة رئيس الجمهورية العربية السورية</span> بشار حافظ الاسد - حفظه الله ورعاه<br></br> قائد العملية الاقتصادية وتطوير البلاد</p>
        </div>
  );
};

export default Preseident;

import { useSelector  } from 'react-redux';
import { useTranslation } from 'react-i18next';

import "./Preseident.css";
import bg from "./../../assets/img/bg-section.png";
const Preseident = () => {

  const {aboutText } = useSelector((state) => state.mainSlice);
  const {  i18n } = useTranslation();


  return (
    <div className="Prese d-flex justify-content-between align align-items-center flex-wrap text-center">
      <img src={bg} alt="img" />
      
      <p>
      {aboutText[i18n.language] && aboutText[i18n.language][0]['text2'+i18n.language]}
        <br></br>
        <span>{aboutText[i18n.language] && aboutText[i18n.language][0]['text3'+i18n.language]}</span> 
        {aboutText[i18n.language] && aboutText[i18n.language][0]['text4'+i18n.language]}
      </p>
    </div>
  );
};

export default Preseident;

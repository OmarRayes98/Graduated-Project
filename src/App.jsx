import { useEffect } from 'react';
import './assets/global.css';

import { useTranslation } from 'react-i18next';

import Home from './pages/home/home';


function App() {
  const { i18n } = useTranslation();

  useEffect(()=>{
    document.documentElement.lang=i18n.language
  },[i18n.language])

  return (
    <>
      <Home />

    </>
  )
}

export default App

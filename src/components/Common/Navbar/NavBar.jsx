import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../../assets/img/logo.svg'
import close from './../../../assets/img/Close.svg'
import menu from './../../../assets/img/Menu.svg'

import ligthLogo from './../../../assets/img/ligthLogo.png'
import darkIcon from './../../../assets/img/light.svg'
import light from './../../../assets/img/dark.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';


const NavBar = ({ darkMode, darkLight }) => {
    const { t , i18n } = useTranslation();
    const [active, setactive] = useState("");
    const [dark, setdark] = useState("");
    const [lang, setlang] = useState("Ar");

    useEffect(() => {
        if (darkLight) {
            setdark("")
        } else {
            setdark("dark")
        }
    }, [darkLight]);


    function activeHundel() {
        if (active == "black") {
            setactive("")
        } else {
            setactive("black")
        }
    }

    const changeLanguage = (lang) =>{

        i18n.changeLanguage(lang);
        
        setlang(lang);

    }

    return (
        <Navbar  expand="lg" className={active + " fixed-top " + dark}>
            <Container className='m-0 p-0 mw-100'>
                <Navbar.Brand href="#home"><img src={(darkLight) ? logo : ligthLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle  className='nav-toggle' aria-controls="basic-navbar-nav" onClick={() => { activeHundel() }} >
                {
                active=="black" ? (
            <img src={close} className='close-rotate' alt="Close Menu" />
          ) : (
            <img src={menu} alt="Open Menu"  />
          )}
          </Navbar.Toggle>
                
                <Navbar.Collapse style={{flexGrow: i18n.language=='en' ? '0':'1'}} id="basic-navbar-nav">
                    <Nav className="me-auto gap-40 ">
                        <Nav.Link href="#" className='active p-0'>{t('label.home')}</Nav.Link>
                        <Nav.Link href="#" className='p-0'>{t('label.news')}</Nav.Link>
                        <Nav.Link href="#" className='p-0'>{t('label.contact')}</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='position-relative bg-transparent text-black border-0'>
                                {lang}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => changeLanguage('ar')}>Ar</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => changeLanguage('en')}>En</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <img src={(active || !darkLight) ? light : darkIcon} alt="" onClick={() => darkMode(prev => !prev)}  />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar


/* if(active){
    className = black fixed-top
}else{
    if (darkLight){
    className = dark fixed-top
    }
    else{
    className =  fixed-top
    }
} */
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../../assets/img/logo.svg'
import ligthLogo from './../../../assets/img/ligthLogo.png'
import darkIcon from './../../../assets/img/light.svg'
import light from './../../../assets/img/dark.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
const NavBar = ({ darkMode, darkLight }) => {
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
    return (
        <Navbar expand="lg" className={active + " fixed-top " + dark}>
            <Container className='m-0 p-0 mw-100'>
                <Navbar.Brand href="#home"><img src={(darkLight) ? logo : ligthLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { activeHundel() }} />
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                    <Nav className="me-auto gap-40 ">
                        <Nav.Link href="#" className='active p-0'>الرئيسية</Nav.Link>
                        <Nav.Link href="#" className='p-0'>النشرة الاقتصادية</Nav.Link>
                        <Nav.Link href="#" className='p-0'>آخر الأخبار</Nav.Link>
                        <Nav.Link href="#" className='p-0'>القوانين</Nav.Link>
                        <Nav.Link href="#" className='p-0'>الشكاوي الالكترونية</Nav.Link>
                        <Nav.Link href="#" className='p-0'>اتصل بنا</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='position-relative bg-transparent text-black border-0'>
                                {lang}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={() => setlang("Ar")}>Ar</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setlang("En")}>En</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <img src={(active || !darkLight) ? light : darkIcon} alt="" onClick={() => darkMode(prev => !prev)} className='dark' />

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
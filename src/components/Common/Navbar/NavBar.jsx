import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../../assets/img/logo.svg'
import dark from './../../../assets/img/light.svg'
import light from './../../../assets/img/dark.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
const NavBar = () => {
    const [active, setactive] = useState(false);
    const [lang, setlang] = useState("Ar");
    return (
        <Navbar expand="lg" className={(active) ? "black fixed-top " : "fixed-top"}>
            <Container className='m-0 p-0 mw-100'>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setactive(!active); }} />
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
                        <img src={(active) ? light : dark} alt="" />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
import NavBar from "../../components/Common/Navbar/NavBar"
import Footer from "../../components/Common/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Preseident from "../../components/Preseident/Preseident"
import Parent from "../../components/StatsticNews/Parent"
import Text from "../../components/Text/Text"
import { useState } from "react"
import './Home.css'

const Home = () => {
    const [darkLight, setdarkLight] = useState(false);
    
    return (
        <div className={(darkLight) ? "home" : "home dark"}>
            <NavBar darkMode={setdarkLight} darkLight={darkLight} />
            <Hero />
            <Text />
            <Preseident />
            <Parent darkLight={darkLight} />
            <Footer />
        </div>
    )
}

export default Home
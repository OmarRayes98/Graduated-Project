import NavBar from "../../components/Common/Navbar/NavBar"
import Footer from "../../components/Common/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Preseident from "../../components/Preseident/Preseident"
import Parent from "../../components/StatsticNews/Parent"
import Text from "../../components/Text/Text"

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Hero />
            <Text />
            <Preseident />
            <Parent />
            <Footer />
        </div>
    )
}

export default Home
import HeroSection from "../Component/HeroSection"
import Jobs from "../Component/Jobs"
import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"

const HomePage = () => {
  return (
    <Navbar>
        <HeroSection/>
        <Jobs/>
       <Footer/>
    </Navbar>
  )
}

export default HomePage
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"
import Section from "../Components/Section/Section"
import Services from "../Components/Services/Services"


function Homepage() {
  return (
      <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <Section></Section>
          <Services></Services>
          <Footer></Footer>

    </div>
  )
}

export default Homepage
import { Navbar } from "./components/Navbar"
import { Home } from "./components/sections/Home"
import { Services } from "./components/sections/Services"
import { About } from "./components/sections/About"
import { Calculator } from "./components/sections/Calculator"
import { Testimonials } from "./components/sections/Testimonials"
import { FAQ } from "./components/sections/FAQ"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="font-poppins bg-neutral overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Calculator />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

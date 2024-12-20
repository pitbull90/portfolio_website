import './App.css'
import Home from './components/home/home.jsx'
import Services from './components/services/Services.jsx'
import Skills from './components/skills/Skills.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Resume from './components/resume/Resume.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import Blog from './components/blog/Blog.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'


function App() {

  return (
    <main className='main'>
      <Header />
      <Home/>
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

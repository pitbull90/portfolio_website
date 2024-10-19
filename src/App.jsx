import './App.css'
import Home from './components/home/home.jsx'
import Services from './components/services/Services.jsx'
import Skills from './components/skills/Skills.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Resume from './components/resume/Resume.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Pricing from './components/pricing/Pricing.jsx'


function App() {

  return (
    <main className='main'>
      <Home/>
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
    </main>
  )
}

export default App

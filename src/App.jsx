import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Renad Majdalwieh | Senior UI/UX Designer</title>
        <meta name="description" content="Award-winning Senior UI/UX Designer crafting intuitive digital experiences. Explore my portfolio showcasing product design, design systems, and user-centered solutions." />
      </Helmet>
      
      <div className="noise-overlay" aria-hidden="true" />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default App

import './App.css'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projetos } from './components/Projetos'
import { Skills }  from './components/Skills'
import { Contact } from './components/Contact'
import { Frase } from './components/Frase'
import { Footer } from './components/Footer'

function App() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Projetos/>
      <Skills/>
      <Frase/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
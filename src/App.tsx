import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App

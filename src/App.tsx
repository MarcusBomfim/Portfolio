import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { useContent } from './i18n/useContent'
import { AboutSection } from './sections/AboutSection'
import { CertificatesSection } from './sections/CertificatesSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  const { ui } = useContent()

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        {ui.skipToContent}
      </a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App

import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Notes from "../components/notes";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div className="scroll-reveal">
        <About />
      </div>
      <div className="scroll-reveal-left">
        <Skills />
      </div>
      <div className="scroll-reveal-right">
        <Projects />
      </div>
      <div className="scroll-reveal">
        <Notes />
      </div>
      <div className="scroll-reveal">
        <Experience />
      </div>
      <div className="scroll-reveal-left">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

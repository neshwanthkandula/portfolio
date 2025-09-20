import Navbar from "./components/Navbar";
import About from "./components/About";
import Information from "./components/Information";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import { useInView } from "./hooks/useInView";

export function SectionWrapper({ children, id, delay = 0 }) {
  const [ref, isVisible] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`fade-drop ${isVisible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}


function App() {
  return (
    <div className="[font-family:'Poppins',sans-serif] relative">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-1 ">
        <SectionWrapper id="information">
          <Information />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="Skills">
          <Skills />
        </SectionWrapper>

        <section id="Projects"> <Projects /></section>
        

        <SectionWrapper id="contactus">
          <ContactUs />
        </SectionWrapper>

        <Footer />
      </div>
    </div>
  );
}

export default App;

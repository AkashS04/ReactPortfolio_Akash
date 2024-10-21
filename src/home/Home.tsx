import React, {useRef} from 'react'
import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../project_details/Project";
import ReactNavbar from "../reactNavbar/ReactNavbar";
import Title from "../title/Title";
import WhyChooseMe from "../whyChooseMe/WhyChooseMe";

function Home() {
  const aboutRef =useRef(null);
  const whyChooseMeRef =useRef(null);
  const projectsRef =useRef(null);
  const contactRef =useRef(null);
  
  const scrollToSection =(ref:any)=>{
ref.current.scrollIntoView({bahaviour:'smooth',block:'start'})
  }

  return (
    <>
      <Title />
      <ReactNavbar 
      onAboutClick={()=>scrollToSection(aboutRef)}
      onWhyChooseMeClick={()=>scrollToSection(whyChooseMeRef)}
      onProjectsClick={()=>scrollToSection(projectsRef)}
      onContactClick={()=>scrollToSection(contactRef)}
       />
      <About ref={aboutRef} />
      <WhyChooseMe ref={whyChooseMeRef}  />
      <Project ref={projectsRef} />
      <Contact ref={contactRef}  />
    </>
  );
}
export default Home;

import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../project_details/Project";
import ReactNavbar from "../reactNavbar/ReactNavbar";
import Title from "../title/Title";
import WhyChooseMe from "../whyChooseMe/WhyChooseMe";

function Home() {
  return (
    <>
      <Title />
      <ReactNavbar />
      <About />
      <WhyChooseMe />
      <Project/>
      <Contact />
    </>
  );
}
export default Home;

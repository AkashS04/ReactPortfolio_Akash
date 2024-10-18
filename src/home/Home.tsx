import About from "../about/About";
import Contact from "../contact/Contact";
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
      <Contact />
    </>
  );
}
export default Home;

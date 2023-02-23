import About from "../components/About";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import RemoteTech from "../components/RemoteTech";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Steps />
      <Testimonials />
      <RemoteTech />
      <Blogs />
      <OurTeam />
      <FAQ />
      <Form />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

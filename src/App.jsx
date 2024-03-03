import About from "./Sections/About";
import BestSellers from "./Sections/BestSellers";
import Contact from "./Sections/Contact";
import Faq from "./Sections/Faq";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import TopRated from "./Sections/TopRated";

export default function App() {
  return (
    <>
    <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSellers />
        <Faq />
        <Contact />
        <Footer />

    </>
  );
}

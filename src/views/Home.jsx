// local imports
import Care from "./Care";
import Footer from "./Footer";
import Hero from "./Hero";
import Products from "./Products";
import Reference from "./Reference";
import Rslider from "./Rslider";
import Services from "./Services";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Reference />
      <Care />
      <Rslider/>
      <Footer />
    </>
  );
}

export default Home;

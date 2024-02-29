import "./css/style.css";

import About from "./composant/About/About";
import Qualification from "./composant/Qualification/Qualification";
import Service from "./composant/Service/Service";
import Blog from "./composant/Blog/Blog";
import Testimonial from "./composant/Testimonial/Testimonial";
import Contact from "./composant/Contact/Contact";
import Footer from "./composant/Footer/Footer";
import Navbar from "./composant/Navbar/Navbar";
import Banner from "./composant/Banner/Banner";
import SkillView from "./composant/Skill/SkillView";
import PortfolioView from "./composant/Portfolio/PortfolioView";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Qualification />
      <SkillView />
      <Service />
      <PortfolioView />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

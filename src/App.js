//Template Javascript
//import "./js/main.js";

//import "./lib/typed/typed.min.js";
//import "./lib/easing/easing.min.js";
//import "./lib/waypoints/waypoints.min.js";
//import "./lib/owlcarousel/owl.carousel.min.js";
//import "./lib/isotope/isotope.pkgd.min.js";
//import "./lib/lightbox/js/lightbox.min.js";

//import "./mail/jqBootstrapValidation.min.js";
//import "./mail/contact.js";

//import "./lib/owlcarousel/assets/owl.carousel.min.css";
//import "./lib/lightbox/css/lightbox.min.css";
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

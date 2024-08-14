import Contact from '../templates/Portfolio templete/src/sections/Contact/Contact';
import Footer from '../templates/Portfolio templete/src/sections/Footer/Footer';
import Hero from '../templates/Portfolio templete/src/sections/Hero/Hero';
import Projects from '../templates/Portfolio templete/src/sections/Projects/Projects';
import Skills from '../templates/Portfolio templete/src/sections/Skills/Skills';
import './TemplatePage.css';
import { Link } from 'react-router-dom';


function TemplatePage() {
  return (
    <div className='TemplatePage-main'>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <div className='editing-button'>
      <Link to="/formPage"><button className='Editing'>Edit</button></Link>
      </div>
    </div>
  );
}

export default TemplatePage;
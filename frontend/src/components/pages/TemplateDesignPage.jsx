
import Footer from '../templates/Portfolio templete/src/sections/Footer/Footer';
import Hero from '../templates/Portfolio templete/src/sections/Hero/Hero1';
import Projects from '../templates/Portfolio templete/src/sections/Projects/Projects1';
import Skills from '../templates/Portfolio templete/src/sections/Skills/Skills1';
import './TemplateDesignPage.css';


function TemplateDesignPage() {
  return (
    <div className='TemplatePage-main'>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default TemplateDesignPage;

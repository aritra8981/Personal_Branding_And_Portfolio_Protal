import './Skills1Styles.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';

function Skills() {

  return (
    <section id="skills" className="s-container">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillList">
      <span>HTML</span>
        {/* <img src={checkMarkIconDark} alt="HTML" className ="Skill-icon"  /> */}
      <span>CSS</span>
        {/* <img src={checkMarkIconDark} alt="CSS" className ="Skill-icon"  /> */}
      <span>JavaScript</span>
        {/* <img src={checkMarkIconDark} alt="JavaScript"  className ="Skill-icon" /> */}
      <span>Node</span>
        {/* <img src={checkMarkIconDark} alt="Node"  className ="Skill-icon" /> */}

      </div>
      <hr />
      <div className="skillList">
        <span>React</span>
        {/* <img src={checkMarkIconDark} alt="React"  className ="Skill-icon" /> */}
        <span>Tailwind CSS</span>
        {/* <img src={checkMarkIconDark} alt="Tailwind CSS"  className ="Skill-icon" /> */}
      </div>
      <hr />
      <div className="skillList">
        <span>Redux</span>
        {/* <img src={checkMarkIconDark} alt="Redux" className ="Skill-icon"  /> */}
          {/* <span>Webpack</span> */}
        {/* <img src={checkMarkIconDark} alt="Webpack"  className ="Skill-icon" /> */}
        <span>Git</span>
        {/* <img src={checkMarkIconDark} alt="Git"  className ="Skill-icon" /> */}
        {/* <span>Jest</span>
        {/* <img src={checkMarkIconDark} alt="Jest" className ="Skill-icon"  /> */}
        {/* <span>Bootstrap</span>
        <img src={checkMarkIconDark} alt="Bootstrap"  className ="Skill-icon" /> */}
      </div>
    </section>
  );
}

export default Skills;

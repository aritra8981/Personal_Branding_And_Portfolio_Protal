import './HeroStyles.css';
import heroImg from '../../assets/Design uten navn.png';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  // const [file, setFile] = useState();
  //   function handleChange(e) {
  //       console.log(e.target.files);
  //       setFile(URL.createObjectURL(e.target.files[0]));

  return (
    <section id="hero" className="hero-container">
      <div className="colorModeContainer">
        <img
          src={heroImg}
          className="hero"
          alt="Profile of Harris Johnsen"
        />
      </div>
      <div className="info">
        <h1>
          Harris
          <br />
          Johnsen
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterDark} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubDark} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinDark} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a className=" a" href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

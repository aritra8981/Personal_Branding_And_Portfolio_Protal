import React from 'react';
import './DashBoardPage.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive, faGoogle, faFacebook, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import logo from '../assests/logo.png'
import { faUser, faChartBar, faTasks, faFileAlt, faCog, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import{Link} from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="Dash-container">
      <nav>
        <div className="Dash-navbar">
          <div className="dash-logo">
            <Link to = "/" ><img src={logo} alt="Dash-Logo" /></Link>
            <h1>AuraPortfolio</h1>
            
          </div>
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faUser} /><span className="Dash-nav-item">Dashboard</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faChartBar} /><span className="Dash-nav-item">Analytics</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTasks} /><span className="Dash-nav-item">Portfolio Board</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFileAlt} /><span className="Dash-nav-item">Documents</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faCog} /><span className="Dash-nav-item">Settings</span></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faQuestionCircle} /><span className="Dash-nav-item">Help</span></a></li>
            <li><a href="#" className="dash-logout"><FontAwesomeIcon icon={faSignOutAlt} /><span className="Dash-nav-item">Logout</span></a></li>
          </ul>
        </div>
      </nav>

      <section className="Dash-main">
        <div className="Dash-main-top">
          <p>Explore the universe!</p>
        </div>
        <div className="Dash-main-body">
          <h1>Recent Portfolio</h1>

          <div className="Dash-search_bar">
            <input type="search" placeholder="Search Portfolio here..." />
            <select>
              <option>Category</option>
              <option>Professional Design</option>
              <option>Student Design</option>
              <option>Job Design</option>
            </select>
          </div>

          {/* <div className="Dash-tags_bar">
            <div className="Dash-tag"><FontAwesomeIcon  className='icon'  icon={faTimes} /><span>Aggressive Portfolio</span></div>
            <div className="Dash-tag"><FontAwesomeIcon className='icon'  icon={faTimes} /><span>Income Portfolio</span></div>
            <div className="Dash-tag"><FontAwesomeIcon  className='icon' icon={faTimes} /><span>Hybrid Portfolio</span></div>
            <div className="Dash-tag"><FontAwesomeIcon className='icon'  icon={faTimes} /><span>Speculative Portfolio</span></div>
          </div> */}

          <div className="Dash-row">
            <p>There are more than <span>100</span> Portfolios</p>
            <a href="#">See all</a>
          </div>

          <div className="job_card">
            <div className="job_details">
              <div className="Dash-img"></div>
              <div className="Dash-text"><h2>Aggressive Portfolio</h2></div>
            </div>
          </div>

          <div className="job_card">
            <div className="job_details">
              <div className="Dash-img"></div>
              <div className="Dash-text"><h2>Income Portfolio</h2></div>
            </div>
          </div>

          <div className="job_card">
            <div className="job_details">
              <div className="Dash-img"></div>
              <div className="Dash-text"><h2>Hybrid Portfolio</h2></div>
            </div>
          </div>

          <div className="job_card">
            <div className="job_details">
              <div className="dash-img"></div>
              <div className="dash-text"><h2>Speculative Portfolio</h2></div>
            </div>
            <div className="job_salary"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

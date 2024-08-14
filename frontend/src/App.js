import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DesignPage from './components/pages/DesignPage';
import SignUpPage from './components/pages/SignUpPage';
import Home from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import TemplatePage from './components/pages/TemplatePage';
import NotFound from './components/pages/NotFound'
import DashboardPage from './components/pages/DashboardPage';
import FormPage from "./components/pages/FormPage.jsx"
import TemplateDesignPage from "./components/pages/TemplateDesignPage"

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/design" element={<DesignPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/Template" element={<TemplatePage/>} />
        <Route path="/formPage" element={<FormPage/>} />
        <Route component={NotFound} />
        <Route path="/templateDesign" element={<TemplateDesignPage/>} />
      </Routes>
    </Router>
    // <>
    // <Navbar/>
    // <>
    // <SignUpPage/>
    // {/* <DesignPage/> */}
    // {/* <ContentSection/>
    // <LoginForm/> */}
    // </>
    // </>
  );
}

export default App;

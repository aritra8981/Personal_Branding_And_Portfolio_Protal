import FormComponent from "../EditingForm";
import Navbar from "../navbar";
import './FormPage.css';

function FormPage() {
    return (
      <div className="ed-form-container">
      <Navbar/>
      <FormComponent/>
      </div>
    )
  };
  
  export default FormPage;
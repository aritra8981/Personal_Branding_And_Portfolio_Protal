// src/FormComponent.js
import React, { useState } from 'react';
import '../components/style/EditingForm.css';
import { Link } from 'react-router-dom';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [projects, setProjects] = useState([{ name: '', description: '', image: null }]);
  const [skills, setSkills] = useState('');

  const handleProfileImageChange = (event) => {
    setProfileImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleProjectImageChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index].image = URL.createObjectURL(event.target.files[0]);
    setProjects(newProjects);
  };

  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { name: '', description: '', image: null }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ name, jobRole, profileImage, projects, skills });
  };

  return (
    <form className ="Editing-Form" onSubmit={handleSubmit}>
      <div>
      <div className="Topic">Portfolio Details</div>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label>Job Role:</label>
        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Add Profile Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        {profileImage && <img src={profileImage} alt="Profile" style={{ width: '100px' }} />}
      </div>

      <div>
        <h3>Projects:</h3>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label>Project Name:</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={(e) => handleProjectChange(index, e)}
              required
            />

            <label>Project Description:</label>
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, e)}
              required
            />

            <label>Project Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleProjectImageChange(index, e)}
            />
            {project.image && <img src={project.image} alt="Project" style={{ width: '100px' }} />}
          </div>
        ))}
        <button type="button" onClick={addProject}>Add Another Project</button>
      </div>

      <div>
        <label>Skills:</label>
        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </div>

      <div className='Sumbit_pDetails'>
         <Link to="/templateDesign"><button type="submit">Submit</button></Link> 

      </div>
    </form>
  );
};

export default FormComponent;

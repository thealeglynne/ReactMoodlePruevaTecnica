// Import necessary modules and styles
import React, { Component } from 'react';
import axios from 'axios'; // For making HTTP requests
import "../style/keyMoodle.css"; // CSS styling

// Define a class-based React component named UserProfileForm
class UserProfileForm extends Component {
  state = {
    skills: [], // Will store the user's skills
    newSkill: { // Will store data for the new skill to be added
      name: '', // Name of the skill
      level: '', // Skill level
      experience: '', // Skill experience
      language: '', // New property for language
    },
  };

  // Handle changes in the input fields
  handleSkillChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newSkill: {
        ...prevState.newSkill,
        [name]: value,
      },
    }));
  };

  // Handle the addition of a new skill
  handleAddSkill = () => {
    // Add the new skill to the state
    this.setState((prevState) => ({
      skills: [...prevState.skills, this.state.newSkill],
      newSkill: { name: '', level: '', experience: '', language: '' }, // Clear the new skill form
    }));
  };

  // Handle the deletion of a skill
  handleDeleteSkill = (index) => {
    // Create a copy of the current skills state
    const updatedSkills = [...this.state.skills];
    // Remove the skill at the specified index
    updatedSkills.splice(index, 1);
    // Update the state with the updated skills
    this.setState({ skills: updatedSkills });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    // URL for the Moodle API
    const moodleApiUrl = 'http://localhost:8888/moodle401/webservice/rest/server.php'; // Change the URL as needed

    // Moodle access token
    const token = '99d38d688a074b8306d56abf1102d32a'; // Replace with your token

    // User skills data to send to the Moodle server
    const userSkills = this.state.skills.map((skill) => ({
      name: skill.name,
      level: skill.level,
      experience: skill.experience,
      language: skill.language, // Include language in the skills data
    }));

    const params = {
      wstoken: token,
      wsfunction: 'core_user_update_users', // Replace with the name of your custom Moodle function
      moodlewsrestformat: 'json',
      // Add other necessary parameters for your custom function here
    };

    // Send a POST request to the Moodle API to add skills to the user
    axios
      .post(moodleApiUrl, params)
      .then((response) => {
        // Handle Moodle's response here
        console.log('Moodle Response:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error adding skills in Moodle:', error);
      });
  };

  // Render the component's UI
  render() {
    const skillOptions = ['JavaScript', 'Python', 'React', 'Node.js', 'HTML', 'CSS']; // List of available skills
    const levelOptions = ['High', 'Medium', 'Low']; // List of skill levels
    const languageOptions = ['Spanish', 'English', 'None']; // List of languages

    return (
      <div className='skills-continer'>
        <h2 className='H2CrateProfile'>Complete your profile</h2>

        <div className='sklillTitle'>
          <p>Add your Skills!</p>
          <p className='listing'>Listing your skills helps know your strengths</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          {/* Form for adding skills */}
          <div className="skill-input">
            <label>Skill:</label>
            <select
              name="name"
              value={this.state.newSkill.name}
              onChange={this.handleSkillChange}
            >
              <option value=""></option>
              {skillOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown menu for selecting skill level */}
          {this.state.newSkill.name && (
            <div className="skill-input">
              <label>Level:</label>
              <select
                name="level"
                value={this.state.newSkill.level}
                onChange={this.handleSkillChange}
              >
                <option value="">Select a level</option>
                {levelOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Dropdown menu for selecting language */}
          {this.state.newSkill.level && (
            <div className="skill-input">
              <label>Language:</label>
              <select
                name="language"
                value={this.state.newSkill.language}
                onChange={this.handleSkillChange}
              >
                <option value="">Select a language</option>
                {languageOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Dropdown menu for selecting experience */}
          {this.state.newSkill.language && (
            <div className="skill-input">
              <label>Experience:</label>
              <select
                name="experience"
                value={this.state.newSkill.experience}
                onChange={this.handleSkillChange}
              >
                <option value="">Select an experience level</option>
                {['Junior', 'Semi-senior', 'Senior'].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="skill-button">
            <button type="button" onClick={this.handleAddSkill}>
              <h3><i className="fas fa-plus"></i> Add Skill</h3>
            </button>
          </div>

          <div className='SaveBootonContainer'>
            <button className='SaveSkillBContainer' type="submit">Save</button>
            <h3 className='tituloskills' >Skills</h3>
          </div>

          {/* List of skills */}
          <div className="skill-list">
            <ul>
              {this.state.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="skill-box">
                    <strong>Skill:</strong> {skill.name}
                    {skill.level && <>, <strong>Level:</strong> {skill.level}</>}
                    {skill.language && <>, <strong>Language:</strong> {skill.language}</>}
                    {skill.experience && <>, <strong>Experience:</strong> {skill.experience}</>}
                  </div>
                  <button type="button" onClick={() => this.handleDeleteSkill(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

// Export the UserProfileForm component as the default export
export default UserProfileForm;

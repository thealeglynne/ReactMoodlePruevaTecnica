// Import necessary modules
import React, { Component } from 'react';
import axios from 'axios'; // For making HTTP requests

// Define a class-based React component named SkillManagement
class SkillManagement extends Component {
  state = {
    skills: [], // Will store the user's skills
    newSkill: { // Will store data for the new skill to be added
      name: '', // Name of the skill
      level: '', // Skill level
      experience: '', // Skill experience
      language: '', // New property for language
    },
  };

  // Function to send skills to Moodle via API
  sendSkillsToMoodle = () => {
    // Define the URL for the Moodle API
    const moodleApiUrl = 'http://localhost:8888/moodle401/webservice/rest/server.php'; // Change the URL as needed

    // Define the Moodle access token
    const token = '99d38d688a074b8306d56abf1102d32a'; // Replace with your token

    // Prepare skills data to send to Moodle
    const dataToSend = {
      skills: this.state.skills,
    };

    const params = {
      wstoken: token,
      wsfunction: 'core_user_update_skills', // Change to the correct Moodle function for skills
      moodlewsrestformat: 'json',
      data: JSON.stringify(dataToSend), // Convert to JSON
      // Add other necessary parameters for your custom function here
    };

    // Send a POST request to the Moodle API for skills
    axios
      .post(moodleApiUrl, params)
      .then((response) => {
        // Handle Moodle's response here
        console.log('Moodle Response (Skills):', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error sending skills to Moodle:', error);
      });
  };

  render() {
    const { skills, newSkill } = this.state;

    return (
      <div>
        {/* UI and form for managing skills */}
        {/* Other parts of the component */}
        <button type="button" onClick={this.sendSkillsToMoodle}>Save Skills</button>
      </div>
    );
  }
}

// Export the SkillManagement component as the default export
export default SkillManagement;

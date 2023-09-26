import React, { Component } from 'react';
import '../style/completeProfile.css'; // Import your CSS styles

class UserProfileForm2 extends Component {
  state = {
    name: '',
    lastName: '',
    city: '',
    age: '',
    experience: '',
    isProfileCompleted: false,
    isFormVisible: false, // Add a state to control the visibility of the form
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all required fields are completed
    if (this.state.name && this.state.lastName && this.state.city && this.state.age && this.state.experience) {
      const profileData = {
        name: this.state.name,
        lastName: this.state.lastName,
        city: this.state.city,
        age: this.state.age,
        experience: this.state.experience,
      };

      if (this.props.onProfileComplete) {
        this.props.onProfileComplete(profileData); // Pass the completed profile data
      }
    } else {
      alert('Please complete all fields.');
    }
  };

  // Add a function to show/hide the form when clicking "Complete Profile"
  toggleFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { isFormVisible } = this.state;

    return (
      <div className="user-profile">
        <button className="complete-profile-button" onClick={this.toggleFormVisibility}>
          +Add Training
        </button>

        {/* Use CSS classes to show/hide the form with animations */}
        <div className={`profile-form-container ${isFormVisible ? 'visible' : ''}`}>
          {isFormVisible && (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  placeholder="Enter your city"
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="Enter your date"
                />
              </div>
              <div className="form-group">
                <label>Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={this.state.experience}
                  onChange={this.handleChange}
                  placeholder="Enter your experience"
                />
              </div>
              <button type="submit">Save</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfileForm2;

import React, { Component } from 'react';
import './App.css';
import UserProfileForm from "./server/keyMoodle";
import Header from "./components/header";
import Search from './components/prompSearch';
import UserProfileForm2 from "./components/completeProfile"; // Make sure to provide the correct path
import IMGProfile from "../src/img/profile.png"
import Footer from './components/footer';

class App extends Component {
  state = {
    profileData: null, // State to store profile data
  };

  // Function to handle profile completion
  handleProfileComplete = (data) => {
    this.setState({ profileData: data });
  };

  render() {
    const { profileData } = this.state;

    return (
      <div className="App">
        {/* Header section */}
        <div className='Header'>
          <Header />
          <Search />
        </div>
        
        {/* Main user container */}
        <div className='userContainer'>
          <UserProfileForm />
        </div>
        
        {/* Profile picture section */}
        <div className='profilePhoto'>
          {/* You can add elements related to the profile picture here if needed */}
        </div>
        
        {/* Main user profile section */}
        <div className="profileSection">
          <img className='imgProfile' src={IMGProfile} alt="imgProfile" />
          <UserProfileForm2 onProfileComplete={this.handleProfileComplete} />
          {profileData && (
            <div className="profile-details">
              {/* Display profile details */}
              <h2 className='NameProfile'> {profileData.name}</h2>
              <p className='LastNameProfile'> {profileData.lastName}</p>
              <p className='CityProfile'> {profileData.city}</p>
              <p className='DateProfile'> {profileData.age}</p>
              <p className='ExperienceProfile'> {profileData.experience}</p>
            </div>
          )}
        </div>
        
        {/* Footer section */}
        <div className='footer'><Footer/></div>
      </div>
    );
  }
}

export default App;

// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Define a class-based component named ProfilePictureUpload
class ProfilePictureUpload extends Component {
  // Initialize the component's state
  state = {
    selectedFile: null,   // To store the selected file
    previewImage: null,   // To store the URL of the preview image
  };

  // Function to handle changes in the selected file input
  handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file from the input

    if (selectedFile) {
      // Check if the selected file is an image (you can add more validations here as needed)
      if (selectedFile.type.startsWith('image/')) {
        // Create a local URL to preview the selected image
        const previewImage = URL.createObjectURL(selectedFile);

        // Update the component's state with the selected file and preview image URL
        this.setState({
          selectedFile,
          previewImage,
        });
      } else {
        // Display an alert message if the selected file is not an image
        alert('Please select a valid image.');
      }
    }
  };

  // Render the component
  render() {
    const { previewImage } = this.state; // Destructure the state

    return (
      <div className="profile-picture-upload">
        {/* Input element for selecting a file */}
        <input
          type="file"
          accept="image/*" // Accept only image files
          onChange={this.handleFileChange} // Attach the change event handler
        />

        {/* Display the preview of the selected image if available */}
        {previewImage && (
          <div className="image-preview">
            <img src={previewImage} alt="Profile" />
          </div>
        )}
      </div>
    );
  }
}

// Export the ProfilePictureUpload component as the default export
export default ProfilePictureUpload;

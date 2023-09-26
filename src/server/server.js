// Import required modules and libraries
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;
const axios = require('axios');

// Use middleware to parse JSON and handle CORS (Cross-Origin Resource Sharing)
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Define a route to receive data from the React client and send it to the Moodle API
app.post('/send-data-to-moodle', (req, res) => {
  // Moodle API endpoint URL - Change this URL as needed
  const moodleApiUrl = 'http://localhost:8888/moodle401/webservice/rest/server.php';
  
  // Your Moodle access token
  const token = 'f8409e0082ca0b8b59588e0350e0ec75';
  
  // Set request headers, including Authorization with the token and Content-Type
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  
  // User data received from React
  const userData = req.body;

  // Send a POST request to the Moodle API
  axios
    .post(
      `${moodleApiUrl}?wstoken=${token}&wsfunction=core_user_update_users&moodlewsrestformat=json`,
      userData,
      { headers }
    )
    .then((response) => {
      // Handle Moodle's response here
      console.log('Moodle Response:', response.data);
      res.json({ success: true, message: 'Data sent successfully to Moodle' });
    })
    .catch((error) => {
      // Handle errors here
      console.error('Error sending data to Moodle:', error);
      res.status(500).json({ success: false, message: 'Error sending data to Moodle' });
    });
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});

// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Import styles for the component
import "../style/prompSearch.css"

// Define a functional component named Search
function Search() {
  // Define a state variable 'searchQuery' and a function 'setSearchQuery'
  // 'searchQuery' will store the search query entered by the user
  // 'setSearchQuery' will be used to update the 'searchQuery' state
  const [searchQuery, setSearchQuery] = useState(''); 

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update 'searchQuery' with the input value
  };

  // Function to handle the search action
  const handleSearch = () => {
    // You can add your search logic here using the 'searchQuery' state
    // For now, we'll simply print the search query to the console
    console.log('Search performed:', searchQuery);
  };

  // Render the search input and button
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="I'm looking for..."
        className="search-input"
        value={searchQuery} // Bind the input value to 'searchQuery'
        onChange={handleSearchChange} // Attach the change event handler
      />
      <button className="search-button" onClick={handleSearch}>
        <p>Search</p>
      </button>
    </div>
  );
}

// Export the Search component as the default export
export default Search;

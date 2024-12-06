// Import required module
// i) Create a file named "notes.txt" and write the phrase "The world has enough coders" to it using the synchronous write method of fs module.
// ii) Retrive the contents of notes.txt file utilising the fs module's synchronous read method to display them on the console.
// iii) Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!" using the fs module's synchronous append method.
// iv) Retrieve the updated contents of the "notes.txt" file and display them on the console.
// Import required module

const fs = require('fs');

const path = 'notes.txt'; // Path to the file

const Solution = () => {
  // i) Create a file named "notes.txt" and write the phrase to it
  fs.writeFileSync(path, 'The world has enough coders'); // Synchronous write method

  // ii) Retrieve and display the contents of "notes.txt"
  let data = fs.readFileSync(path, { encoding: 'utf-8' }); // Synchronous read method
  console.log('Data:', data); // Display initial content

  // iii) Expand the existing content by appending additional text
  fs.appendFileSync(path, ' BE A CODING NINJA!'); // Synchronous append method

  // iv) Retrieve and display the updated contents
  data = fs.readFileSync(path, { encoding: 'utf-8' }); // Read updated content
  console.log('After appending:', data); // Display updated content
};

Solution();
module.exports = Solution;


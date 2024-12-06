// Import the necessary modules here
const http = require('http');

// Define the port number
const PORT = 8080;

// Create the server instance and define the request handler
const server = http.createServer((req, res) => {
   let content = 'Response received at port 8080';
   res.end(content);
});

// Configure the server to listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the server instance for evaluation purposes
module.exports = server;

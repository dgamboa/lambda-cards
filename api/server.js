// Imports
const express = require('express');
// router
const server = express();

// Middleware
server.use(express.json());
// router

// server.get('/', (req, res) => {
//   res.send(`<h2>Lambda Cards</h2>`);
// });

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "Something went wrong in the server. Please check your endpoint and the structure of your request"
  });
});

module.exports = server;
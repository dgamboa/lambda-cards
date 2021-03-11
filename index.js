// Imports
require('dotenv').config();
const path = require('path');
const express = require('express');

// Express Server Instance and Middleware
const server = express();

server.use(express.json())
server.use(express.static(path.join(__dirname, 'frontend/build')));

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  server.use(cors());
};

// API Endpoints
// ...to be written...

// Display React App for non-API Endpoints
server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// PORT Set Up and Listen
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
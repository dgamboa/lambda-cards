// Imports
require('dotenv').config();
const express = require('express');

// Express Server Instance and Middleware
const server = express();

server.use(express.json())

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  server.use(cors());
};

// Endpoints
server.use('*', (req, res) => {
  res.send('<h1>Hello</h1>')
});

// PORT Set Up and Listen
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
// Imports
const express = require('express');
const questionsRouter = require('./questions/questions-router');
const server = express();

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  server.use(cors());
};

// Middleware
server.use(express.json());
server.use('/api/questions', questionsRouter);

module.exports = server;
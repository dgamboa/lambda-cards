// Imports
const express = require('express');
const questionsRouter = require('./questions/questions-router');
const server = express();

// Middleware
server.use(express.json());
server.use('/api/questions', questionsRouter);

module.exports = server;
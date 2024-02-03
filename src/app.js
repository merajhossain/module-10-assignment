const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const router = require('./routes/api');

const app = express();

// Use middleware functions
app.use(cors());
app.use(helmet());
app.use(hpp());

// Use your router
app.use(router);

module.exports = app;

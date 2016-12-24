// Modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// Setup MongoDB
mongoose.connect('')

// Setup App
app.use(morgan('combined')); // for logging requests
app.use(cors());  			 // resolve CORS issues
app.use(bodyParser.json({type: '*/*'}));
router(app);


// Setup Server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Now listening on port ${port}`);
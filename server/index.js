const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// require("dotenv").config()

// Define Express routes
app.use('/', require('./routes/index'));

// const PORT = process.env.PORT;
const PORT = 5000;
app.listen(PORT, function() {
  console.log(`Node server listening on port ${PORT}!`);
});

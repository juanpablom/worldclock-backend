const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { handleError } = require("./app/helpers/error");
require("dotenv").config();

const app = express();

app.use(cors()); 
/*
var corsOptions = {
  origin: "https://localhost:3000"
};
app.use(cors(corsOptions));
*/

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("combined"));

// routes
require("./app/routes/worldclock.routes")(app);

app.use((err, req, res, next) => {
  handleError(err, res);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


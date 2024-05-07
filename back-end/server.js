const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose
const userRoute = require("./routes/userRoute"); //import userRoute.js
const employeeRoute = require("./routes/employeeRoute"); //import employeeRoute.js
require("dotenv").config(); //import dotenv

const cors = require('cors');

const app = express(); //Creates an Express application
app.use(cors());

app.use(express.json()); //Parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


// process.env.PORT: gets the port from the environment variables
const PORT = process.env.PORT || 8089;

// process.env.CONNECTION_STRING: gets the connection string from the environment variables
const CONECTION_STRING = process.env.CONNECTION_STRING
  
// mongoose.connect: connects to the database
mongoose.connect(CONECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/user", userRoute); //Use userRoute.js for /users route
app.use("/emp", employeeRoute); //Use employeeRoute.js for /employees route

// app.route: chainable route handler for a route path
app.route("/").get((req, res) => {
  res.send("<h1>Wlecome to COMP3123 Assignment 2</h1>");
});

// app.listen: starts the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

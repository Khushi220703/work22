const express = require("express");
const routes = express.Router();


const Signup = require('./signup');


routes.use('/signup',Signup);

module.exports = routes;

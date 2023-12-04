const express = require("express");
const {addCourses} =require("../controller/courseController");

routes = express.Router();




routes.route("/").post(addCourses);

module.exports = routes;
const express = require("express");
const {addCourses,addStudentToCourse} =require("../controller/courseController");

routes = express.Router();




routes.route("/").post(addCourses);
routes.route("/").put(addStudentToCourse);

module.exports = routes;
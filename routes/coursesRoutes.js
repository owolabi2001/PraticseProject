const express = require("express");
const routes = express.Router();

const {addCourses,
    addStudentToCourse,
    getStudentsforCourse} =require("../controller/courseController");






routes.route("/").post(addCourses);
routes.route("/").put(addStudentToCourse);
routes.route("/:courseCode").get(getStudentsforCourse);

module.exports = routes;
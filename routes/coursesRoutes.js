const express = require("express");
const routes = express.Router();

const {addCourses,
    addStudentToCourse,
    getStudentsforCourse} =require("../controller/courseController");

routes.route("/").post(
    // #swagger.tags = ['Courses']
    addCourses);
routes.route("/").put(
    // #swagger.tags = ['Courses']
    addStudentToCourse);
routes.route("/:courseCode").get(
    // #swagger.tags = ['Courses']
    getStudentsforCourse);

module.exports = routes;
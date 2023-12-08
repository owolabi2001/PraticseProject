const express = require("express");
const {addStudent,getStudentByEmail} = require("../controller/studentController");

const routes = express.Router();

routes.route("/").post(addStudent);
routes.route("/:email").get(getStudentByEmail);
module.exports= routes;
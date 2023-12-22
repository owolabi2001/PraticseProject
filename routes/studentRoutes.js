const express = require("express");
const {addStudent,getStudentByEmail,getAllStudent} = require("../controller/studentController");

const routes = express.Router(); 

routes.route("/").post(
     // #swagger.tags = ['Students']
    addStudent);
routes.route("/:email").get(
    // #swagger.tags = ['Students']
    getStudentByEmail);
routes.route("/").get(
    // #swagger.tags = ['Students']
    getAllStudent);
module.exports= routes;
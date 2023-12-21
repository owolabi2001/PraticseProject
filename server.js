const express = require("express");
const app = express();
const dotEnv= require("dotenv").config();
const {connectDB,connectUsingMongoose} = require("./dataBaseConnection");

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const port = process.env.PORT || 5000;


//Section for swagger documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// connectDB().catch(console.dir);
connectUsingMongoose();

// Adding Middleware and registering API routes
app.use(express.json());
app.use("/api/student",require("./routes/studentRoutes"));
app.use("/api/course",require("./routes/coursesRoutes"));




app.listen(port,()=>{
    console.log(
        `😂😂😂😂😂 ==========> Backend Service Running On port ${port}`);
})


module.exports = app;

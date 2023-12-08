const express = require("express");
const app = express();
const dotEnv= require("dotenv").config();
const {connectDB,connectUsingMongoose} = require("./dataBaseConnection");

const port = process.env.PORT || 5000;

// connectDB().catch(console.dir);
connectUsingMongoose();
app.use(express.json());
app.use("/api/student",require("./routes/studentRoutes"));
app.use("/api/course",require("./routes/coursesRoutes"));


app.listen(port,()=>{
    console.log(
        `😂😂😂😂😂 ==========> Backend Service Running On port ${port}`);
})


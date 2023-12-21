const {MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const dotEnv = require("dotenv").config;

const url = process.env.DATABASE;

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

const connectDB = async () =>{
    try{
        await client.connect(url);
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally{
        await client.close();
    }
}

const connectUsingMongoose = async () =>{
    try{
        await mongoose.connect(
            url
        );
        console.log("Mongoose connected to studentDb");
    }
    catch(error){
        console.log(error);
    }
    
}



module.exports = {
    connectDB,
    connectUsingMongoose
}
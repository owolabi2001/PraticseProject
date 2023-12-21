const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotEnv= require("dotenv").config();
const port = process.env.PORT || 5000;



const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    version: '2.0.0',
    description: 'Description'
  },
  host: `localhost:${port}`
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];



// swaggerAutogen(outputFile, routes, doc);

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./server')           // Your project's root file
})


 
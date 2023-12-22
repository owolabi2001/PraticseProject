const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotEnv= require("dotenv").config();
const port = process.env.PORT || 5000;


const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Praticse Project',
    version: '1.0.0',
    description: '**The purpose of the project is to denmonstrate proficency in node js and other technologies**'
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  host: `localhost:${port}`
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];




swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./server')           // Your project's root file
})


 
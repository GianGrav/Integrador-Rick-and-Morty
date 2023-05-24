const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const server = express();
const PORT = 3001;
const {router} = require("./routes/index.js");

server.use(morgan("dev"))
server.use(express.json());
server.use(cors());
server.use('/rickandmorty', router);

/*
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
}); */





server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
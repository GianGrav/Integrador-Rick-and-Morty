const http = require('http');

const express = require('express');
const server = express();
const PORT = 3001;

const { Router } = require('express');
const router = Router();

const { getCharById } = require('./controllers/getCharById');
const { login } = require('./controllers/login');
const { postFav } = require('./controllers/postFav');
const { deleteFav } = require('./controllers/deleteFav');

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

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
});

server.use(express.json());

server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
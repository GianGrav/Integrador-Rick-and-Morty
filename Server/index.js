const http = require('http');
const { getCharById } = require('./controllers/getCharById');

http.createServer((request, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');


    if (request.url.includes('/rickandmorty/character')) {

        const id = request.url.split('/').at(-1);

        getCharById(res, id);
    }
})
    .listen(3001);

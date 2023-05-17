const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.data)
        .then(data => {
            const char = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }

            return res.writeHeader(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(char));
        }).catch(err => {
            return res.writeHeader(500, { 'Content-Type': 'text/plain' })
                .end(JSON.stringify(err.message));
        });
};


module.exports = {
    getCharById
};
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const id = req.params.id;

    axios
        .get(URL + id)
        .then((response) => {
            const data = response.data;

            if (data.error) {
                res.status(404).json({ message: "Not found" });
            } else {
                const char = {
                    id: id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                };

                res.json(char);
            }
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

module.exports = {
    getCharById,
};
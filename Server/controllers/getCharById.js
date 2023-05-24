const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {

    try {
        const  { id }  = req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw Error(`ID: ${id} Not Found`);

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status,
        }
        return res.status(200).json(character);


    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message);
    }
}




/*
   
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
};*/

module.exports = {
    getCharById,
};
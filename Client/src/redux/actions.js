import axios from 'axios';
import { GET_CHARACTERS, ADD_FAVORITES, REMOVE_FAVORITES } from "./actions-type";

const getCharacters = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get("https://rickandmortyapi.com/api/character");
            return dispatch({ type: GET_CHARACTERS, payload: response.data.results });
        } catch (error) {
            console.log(error);
        }
    }
};


export const addFavorites = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}



export const removeFavorites = (character) => {
    return {
        type: REMOVE_FAVORITES,
        payload: character
    }
}

export default getCharacters;
import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDEN } from "./action-types";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      });
   };
};

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload],
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
            };

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(flt => flt.gender === payload)
            return {
                ...state,
                myFavorites:
                    payload === "allCharacters"
                        ? [...state.allCharacters]
                        : allCharactersFiltered
            };

        case ORDEN:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    payload === "A"
                        ? allCharactersCopy.sort((a, b) => a.id - b.id)
                        : allCharactersCopy.sort((a, b) => b.id - a.id)
            };

        default:
            return state;
    }
};

export default reducer;
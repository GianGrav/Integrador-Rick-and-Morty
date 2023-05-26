import './Favorite.css'
import { connect } from "react-redux";
import Card from '../Card/Card.jsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ordenCards, filterCards} from '../../redux/action';



const Favorite = ({myFavorites}) => {


    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(ordenCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value));
    }

    return (
        <>
            <div class="hi">
            <select onChange={handleOrder} name="ordenar" id="">
                <option value="A">Ascendente</option>
                <option value="D">Decendente</option>
            </select>
            <select onChange={handleFilter} name="hola" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>   
            </div>
            {myFavorites.map((character) => (
            <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={character.onClose}
            /> 
            ))}
        </>
    )
}


const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}




export default connect(
    mapStateToProps,
    null
)(Favorite);

//   <button onClick={handleOrder} name="ordenar" id="" value="A">guardar cambios</button> lindo recuerdo
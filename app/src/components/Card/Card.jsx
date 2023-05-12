import { connect } from "react-redux";
import "./card.css"
import { useState, useEffect } from "react";
import { addFav, removeFav, filterCards } from "../../redux/action";


const Card = ({ id, key, name, onClose, origin, status, gender, species, removeFav, addFav, image, myFavorites, filterCards }) => {



   const [isFav, setIsfav] = useState(false);
   const handleFavorite = () => {

      if (isFav) {
         removeFav(id);
         setIsfav(false);
         filterCards("allCharacters");
      } else {
         addFav({ id, key, name, onClose, origin, status, gender, species, image });
         setIsfav(true);
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);



   return (

      <div class="flip-card">

         <div class="flip-card-inner">
            <div class="flip-card-front">
               <div class="casa">
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
               </div>

               <button class="botonar" onClick={() => { onClose(id) }}>x</button>
               <p class="title">
                  <h3 class="card-name">{name}</h3>
               </p>
               <img src={image} alt='' class="foto" />
            </div>
            <div class="flip-card-back">
               <div class="casa">
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
               </div>
               <button class="botonar" onClick={() => { onClose(id) }}>x</button>
               <p class="title-back"></p>
               <h2 class="eri">Estado:  {status}</h2>
               <br />
               <h2 class="eri">Especie:  {species}</h2>
               <br />
               <h2 class="eri">Genero:{gender}</h2>
               <br />
               <h2 class="eri">Origen:{origin.name}</h2>
            </div>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) },
      filterCards: (id) => { dispatch(filterCards(id)) }
   }
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);






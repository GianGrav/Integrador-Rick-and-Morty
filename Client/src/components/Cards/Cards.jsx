import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards(props) {
   const {characters} = props;


   return(
      <div className="cards-container">
         {characters.map((character) => (
            <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={props.onClose}
            /> 
         ))}

      </div>
   )
}

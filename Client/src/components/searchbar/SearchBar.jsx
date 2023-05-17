import { useState } from "react";
import styles  from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.container}>
         <input className={styles.searchInput} type='search' id='search' value={id} onChange={handleChange} />
         <button className={styles.searchButton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}



export default SearchBar;
import "./Nav.css"
import SearchBar from '../searchbar/SearchBar';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}){



    return (
        <nav class="navb" >
            

            <button class="but" >
                <Link to="/home">Home</Link>
            </button>
            
            <button class="but">
                <Link to="/about">About</Link>
            </button>

            <button class="but" >
                <Link to="/favorite">fav</Link>
            </button>
            <ul>
            <SearchBar onSearch={onSearch} />
            </ul>

        </nav>
    );
}
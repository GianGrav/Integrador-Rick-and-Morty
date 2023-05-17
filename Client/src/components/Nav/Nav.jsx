import "./Nav.css"
import SearchBar from '../searchbar/SearchBar';
import { Link } from 'react-router-dom';


export default function Nav({ onSearch }) {



    return (
        <nav className="navb" >


            <Link to="/home">
                <button className="but" >Home</button>
            </Link>

            <Link to="/about">
                <button className="but">About</button>
            </Link>

            <Link to="/favorite">
                <button className="but" >Favorites</button>
            </Link>
            <ul>
                <SearchBar onSearch={onSearch} />
            </ul>

        </nav>
    );
}
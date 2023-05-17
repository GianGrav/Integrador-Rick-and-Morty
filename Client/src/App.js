import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites.jsx';



function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(true);
   const EMAIL = 'giancarlogravagnatrabajo@gmail.com';
   const PASSWORD = 'abc12345';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([]);


   function onSearch(id) {
      console.log(id);
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {


         if (data.name) {
            // Buscar si el personaje ya está en el array
            const characterExists = characters.find(char => char.id === data.id);
            if (characterExists) {
               window.alert('¡Este personaje ya está en pantalla!');
            } else {
               setCharacters(oldChars => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
   }

   const { pathname } = useLocation()



   return (
      <div className='App'>

         {pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorite' element={<Favorite />} />
         </Routes>
      </div>
   );
}




export default App;


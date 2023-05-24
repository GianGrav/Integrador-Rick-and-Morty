import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route} from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites';



function App(){

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'tobiasa897@gmail.com';
const PASSWORD = 'abc12345';
/*
function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
} 

function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
} */
async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';

   try {
      const response = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { data } = response;
      const { access } = data;
      setAccess(data);
      if (access) {
         navigate('/home');
      }
   } catch (error) {
      // Manejo de errores
      console.error(error);
   }
}
/*------------------------------------------------------------------------------------------------------------*/ 

useEffect(() => {
   !access && navigate('/');
}, [access]);

   const [characters, setCharacters] = useState([]);
   


async function onSearch(id) {

   const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   
   try {
      if (data.name) {
               // Buscar si el personaje ya está en el array
               const characterExists = characters.find(char => char.id === data.id);
               if (characterExists) {
                  window.alert('¡Este personaje ya está en pantalla!');
               } else {
                  setCharacters(oldChars => [...oldChars, data]);
               }
            }
   } catch (error) {
      window.alert('¡No hay personajes con este ID!');
   }
}

// function onSearch(id) {
  
//    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {


//    if (data.name) {
//       // Buscar si el personaje ya está en el array
//       const characterExists = characters.find(char => char.id === data.id);
//       if (characterExists) {
//          window.alert('¡Este personaje ya está en pantalla!');
//       } else {
//          setCharacters(oldChars => [...oldChars, data]);
//       }
//    } else {
//       window.alert('¡No hay personajes con este ID!');
//    } 
//    });
// }

function onClose(id) {
   setCharacters((oldChars) => oldChars.filter((char) => char.id!== id));
}

const {pathname} = useLocation()



   return(
      <div className='App'>
         
         {pathname!=='/' ? <Nav onSearch ={onSearch}/> :''}
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}  />} />
            <Route path='/favorite' element={<Favorite/>} />
         </Routes>
      </div>
   );
}




export default App;


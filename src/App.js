import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import 'firebase/firestore';
import Navbar from './components/Navbar';
import Login from './components/Login';
import MyList from './components/MyList';
import Principal from './components/Principal';

export default function App() {
    
    //states
    const [texto, setTexto] = useState('');
    const [error, setError] = useState('');
    const [movie, setMovie] = useState([]);
    const [detalles, setDetalles] = useState('');
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState('');
    const [favoriteList, setFavoriteList] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [lastText, setLastText] = useState('');

    //firebase
    const firebase = useFirebaseApp();
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                setUser(user);
                setLogin(true);
            }
        })
        getData();
    }, [user])

    useEffect(() => {
        if(lastText){
            scroll();
        }
    }, [pageNumber])

    //funciones
    const handleTyping = (e) => {
        setTexto(e);
    }

    const scroll = async () => {
        const url = 'https://www.omdbapi.com/?apikey=770b0345';
        const res = await axios.get(`${url}&s=${lastText}&page=${pageNumber}`);
        const data = res.data;

        if (data.Response === 'False'){
            return
        }else{
            const newData = [...movie];
            data.Search.map(peli => newData.push(peli));
            setMovie(newData);
        }
    }

    const buscar = async () => {
        
        if(!texto){
            return setError('Por favor ingrese un texto valido!')
        }

        const url = 'https://www.omdbapi.com/?apikey=770b0345';
        const res = await axios.get(`${url}&s=${texto}`);
        const data = res.data;

        if(data.Response === 'False'){
            return setError('No hay resultados');
        }

        setError('');
        setLastText(texto)
        setTexto('');
        setDetalles('');
        setMovie(data.Search);
    }

    const buscarDetalles = async (dato) => {
        const url = 'https://www.omdbapi.com/?apikey=770b0345';
        const res = await axios.get(`${url}&i=${dato}`);
        const data = res.data;
        setMovie([]);
        setPageNumber(0);
        setDetalles(data);
    }

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    const handleLogout = () => {
        firebase.auth().signOut();
        setUser('');
        setLogin(false);
    }

    const handlefavorits = async () => {
        if(login){
            const pelicula = {
                uID: user.uid,
                mID: detalles.imdbID,
                mPoster: detalles.Poster,
                mTitle: detalles.Title,
                mYear: detalles.Year,
            }

            await firebase.firestore().collection('favoritos').doc().set(pelicula);

            setMensaje('La pelicula ha sido agregado a favoritos')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
        }else{
            setError('Debes iniciar sesion para agregar a favoritos');
        }
    }

    const deleteFavoritos = async (dato) => {
        await firebase.firestore().collection('favoritos').doc(dato).delete()
        setMensaje('La pelicula ha sido quitada de favoritos');
        setTimeout(() => {
            setMensaje('')
        }, 3000);
    }

    const getData = () => {
        firebase.firestore().collection('favoritos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                if (doc.data().uID === user.uid){
                    docs.push({...doc.data(), id: doc.id});
                }
            })
            setFavoriteList(docs);
        })
    };
    
    return (
        <Router>
            <Navbar login={login} logout={handleLogout} user={user}/>   
            <Switch>
                <Route path='/login'>
                    {!login ? <Login login={handleLogin} /> : <Redirect to='/' />}
                </Route>
                <Route path='/myList'>
                    {login ?
                        <MyList
                            list={favoriteList}
                            user={user}
                            mensaje={mensaje}
                            borrar={deleteFavoritos}
                            /> :
                        <Redirect to='/login' />}
                </Route>
                <Route path='/' exact>
                    <Principal
                        texto={texto}
                        handle={handleTyping}
                        buscar={buscar} error={error}
                        movie={movie}
                        detalles={detalles}
                        buscarDetalles={buscarDetalles}
                        favorito={handlefavorits}
                        list={favoriteList}
                        mensaje={mensaje}
                        borrar={deleteFavoritos}
                        page={setPageNumber}
                        />
                </Route>
            </Switch>
        </Router>
    )
}

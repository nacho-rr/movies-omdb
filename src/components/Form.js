import React, { Fragment, useState } from 'react'
import axios from 'axios';

export default function Form() {

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [movie, setMovie] = useState([]);
    const [detalles, setDetalles] = useState('');

    const styles = {
        height: '350px',
        width: '100%',
    }

    const typing = (e) => {
        setTitle(e.target.value);
    }

    const busqueda = async (e) => {
        e.preventDefault();
        
        if(!title){
            return setError('Por favor ingrese un texto valido');
        }

        const url = 'https://www.omdbapi.com/?apikey=770b0345';
        const res = await axios.get(`${url}&s=${title}`);
        const data = res.data;
        
        if(data.Response === 'False'){
            return setError('No hay resultados');
        }

        setError('');
        setTitle('');
        setDetalles('');
        setMovie(data.Search);
    }

    const element = (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src={detalles.Poster} alt={detalles.Title} style={styles}/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h4>{detalles.Title} - {detalles.Year}</h4>
                    </div>
                    <div className="card-body">
                        <p>Actores: {detalles.Actors}</p>
                        <p>Generos: {detalles.Genre}</p>
                        <p>Idioma: {detalles.Language}</p>
                        <p>Duracion: {detalles.Runtime}</p>
                        <p>{detalles.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            <div className="container">
                <form className="form-group d-flex mt-4" onSubmit={busqueda}>
                    <input
                        type="text"
                        className="form-control mr-2"
                        placeholder="Ingrese el nombre a buscar..."
                        autoFocus
                        value={title}
                        onChange={typing}
                    />
                    <button className="btn btn-outline-primary">Buscar</button>
                </form>
                <p className="container text-danger">{error}</p>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {movie.map(movie => {
                        return <div className="col-md-4 my-2" key={movie.imdbID}>
                            <div className="card" onClick={ async () => {
                                const url = 'https://www.omdbapi.com/?apikey=770b0345';
                                const res = await axios.get(`${url}&i=${movie.imdbID}`);
                                const data = res.data;
                                setMovie([]);
                                setDetalles(data);
                            }}>
                                <img src={movie.Poster} alt={movie.Title} style={styles}/>
                                <div className="card-body">
                                    <h4>{movie.Title} - {movie.Year}</h4>
                                    <p>{movie.Type}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                {detalles && element}
            </div>
        </Fragment>
    )
}

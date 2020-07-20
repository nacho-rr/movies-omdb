import React, { Fragment } from 'react'

export default function Detalles(props) {

    const {detalles, favorito, error, list, mensaje, borrar} = props;

    const styles = {
        height: '350px',
        width: '100%',
    }
    const filtro = list.filter(elemento => elemento.mID === detalles.imdbID);

    return (
        <Fragment>
            <div className="col-md-4 mt-2">
                <div className="card">
                    <img src={detalles.Poster} alt={detalles.Title} style={styles}/>
                </div>
            </div>
            <div className="col-md-8 mt-2">
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
                        {filtro.length === 0 ?
                            <button type="button" className="btn btn-outline-danger" onClick={() => favorito()}>Añadir a Favoritos</button>:
                            <button type="button" className="btn btn-danger" onClick={() => borrar(filtro[0].id)}>Quitar de Favoritos</button>}
                    </div>
                </div>
            </div>
            <p className="container text-danger">{error}</p>
            <p className="container text-success">{mensaje}</p>
        </Fragment>
    )
}

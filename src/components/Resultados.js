import React from 'react'
import Card from './Card';
import Bienvenida from './Bienvenida';
import Detalles from './Detalles';

export default function Resultados(props) {

    const {movie, detalles, buscar, favorito, error, list, mensaje, borrar} = props;

    return (
        <div className="container my-4">
            <div className="row">
                {((movie.length === 0) && (!detalles))?
                    <Bienvenida />:
                    ((!detalles)?
                        (movie.map(movie => <Card dato={movie} key={movie.imdbID} buscar={buscar}/>)):
                        <Detalles
                            detalles={detalles}
                            favorito={favorito}
                            error={error}
                            list={list}
                            mensaje={mensaje}
                            borrar={borrar}
                        />)}
            </div>
        </div>
    )
}

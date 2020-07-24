import React, { useRef, useCallback } from 'react';
import Card from './Card';
import Bienvenida from './Bienvenida';
import Detalles from './Detalles';

export default function Resultados(props) {

    const {movies, detalles, buscar, favorito, error, list, mensaje, borrar, page} = props;
    
    const observer = useRef();
    
    const lastMovieRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                page(prevPage => prevPage + 1);
            }
        })
        if (node) observer.current.observe(node)
    }, [])

    return (
        <div className="container my-4">
            <div className="row">
                {((movies.length === 0) && (!detalles))?
                    <Bienvenida />:
                    ((!detalles)?
                        (movies.map((movie, index) => {
                            if (movies.length === index + 1) {
                                return <Card dato={movie} key={movie.imdbID} buscar={buscar} ult={lastMovieRef}/>
                            }else {
                                return <Card dato={movie} key={movie.imdbID} buscar={buscar}/>
                            }}
                            )):
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

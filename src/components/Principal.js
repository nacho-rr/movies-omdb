import React, { Fragment } from 'react';
import Buscador from './Buscador';
import Resultados from './Resultados';

export default function Principal(props) {

    const {texto, handle, buscar, error, movie, detalles, buscarDetalles, favorito, list, mensaje, borrar} = props;

    return (
        <Fragment>
            <Buscador texto={texto} handle={handle} buscar={buscar} error={error} />
            <Resultados
                movie={movie}
                detalles={detalles}
                buscar={buscarDetalles}
                favorito={favorito}
                error={error}
                list={list}
                mensaje={mensaje}
                borrar={borrar}
            />
        </Fragment>
    )
}

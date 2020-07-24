import React, { Fragment } from 'react';
import Buscador from './Buscador';
import Resultados from './Resultados';

export default function Principal(props) {

    const {texto,
           handle,
           buscar,
           error,
           movie,
           detalles,
           buscarDetalles,
           favorito,
           list,
           mensaje,
           borrar,
           page} = props;

    return (
        <Fragment>
            <Buscador texto={texto} handle={handle} buscar={buscar} error={error} />
            <Resultados
                movies={movie}
                detalles={detalles}
                buscar={buscarDetalles}
                favorito={favorito}
                error={error}
                list={list}
                mensaje={mensaje}
                borrar={borrar}
                page={page}
            />
        </Fragment>
    )
}

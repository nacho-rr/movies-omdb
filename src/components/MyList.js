import React, { Fragment } from 'react'
import Tabla from './Tabla'

export default function MyList(props) {

    const {list, borrar, mensaje} = props;

    return (
        <Fragment>
            <div className="container my-4">
                <p className="container text-success">{mensaje}</p>
                {list.length === 0 ?
                    (<h4>No hay guardado en favorito</h4>):
                        (list.map(dato => <Tabla dato={dato} key={dato.id} borrar={borrar}/>))}
            </div>
        </Fragment>
    )
}

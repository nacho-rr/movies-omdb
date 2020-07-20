import React, { Fragment } from 'react'

export default function Tabla(props) {
    
    const {dato, borrar} = props;

    const styles = {
        height: '250px',
        width: '100%',
    }

    return (
        <Fragment >
            <div className="row my-3">
                <div className="col-md-4">
                    <div className="card">
                        <img src={dato.mPoster} alt={dato.mTitle} style={styles} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>{dato.mTitle} - {dato.mYear}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-outline-danger" onClick={() => borrar(dato.id)}>Quitar</button>
                </div>
            </div>
            <div className="dropdown-divider"></div>
        </Fragment>
    )
}

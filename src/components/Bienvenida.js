import React, { Fragment } from 'react'

export default function Bienvenida() {
    return (
        <Fragment>
            <div className="container">
                <div className="card border-primary mx-auto mt-4" style={{maxWidth: '30rem'}} >
                    <div className="card-body text-center">
                        <h2 className="card-title">Bienvenidos a MOVIES APP</h2>
                        <p className="card-text">Una aplicación desarrollada para que puedas buscar tus peliculas y hacer una lista con tus favoritas.</p>
                        <p><small>Solo tienes que ingresar con tu cuenta de Google</small></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

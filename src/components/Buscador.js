import React from 'react'

export default function Buscador(props) {

    const {texto, handle, buscar, error} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        buscar();
    }

    return (
        <div className="container">
            <form className="form-group d-flex mt-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Ingrese el nombre a buscar..."
                    name="buscar"
                    autoFocus
                    value={texto}
                    onChange={(e) => {handle(e.target.value)}}
                />
                <button className="btn btn-outline-primary">Buscar</button>
            </form>
            <p className="container text-danger">{error}</p>
        </div>
    )
}

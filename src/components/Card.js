import React from 'react'

export default function Card(props) {

    const {dato, buscar, ult} = props;

    const styles = {
        height: '350px',
        width: '100%',
    }

    return (
        <div className="col-md-4 my-2">
            <div className="card" onClick={() => buscar(dato.imdbID)} ref={ult}>
                <img src={dato.Poster} alt={dato.Title} style={styles} />
                <div className="card-body">
                    <h4>{dato.Title} - {dato.Year}</h4>
                    <p>{dato.Type}</p>
                </div>
            </div>
        </div>
    )
}

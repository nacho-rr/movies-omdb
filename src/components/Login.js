import React from 'react'

export default function Login(props) {

    const {login} = props;

    return (
        <div className="container">
            <div className="card border-primary mx-auto mt-5" style={{maxWidth: '25rem'}}>
                <div className="card-header">Login</div>
                <div className="card-body">
                    <p className="card-text">Haz login con tu cuenta de Google para realizar tu lista de favoritos</p>
                    <button type="button" className="btn btn-outline-info btn-lg btn-block" onClick={() => login()}>Login with Google</button>
                </div>
            </div>
        </div>
    )
}

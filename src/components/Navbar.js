import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    const { login, logout, user } = props;
    
    const toggle = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show')
    }

    const menu = (
        <div className="nav-item dropdown show mr-2">
            <span className="navbar-brand dropdown-toggle" role="button" onClick={toggle}>{user.displayName}</span>
            <div className="dropdown-menu" style={{minWidth: '0'}} id="menu">
                <Link className="dropdown-item btn btn-outline-primary" to="/myList" onClick={toggle}>Mi Lista</Link>
                <span className="dropdown-item btn btn-outline-primary" onClick={() => logout()}>Logout</span>
            </div>
        </div>
    )

    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary">
                <div>
                    <Link className="navbar-brand" to='/'>MOVIES APP</Link>
                </div>
                <Fragment>
                    {login ? (menu): (<Link className="navbar-brand" to='/login'>Login</Link>)}
                </Fragment>
            </nav>
        </Fragment>
    )
}

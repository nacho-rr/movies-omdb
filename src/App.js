import React, { Fragment } from 'react'
import Form from './components/Form'

export default function App() {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand">MOVIES APP</span>
            </nav>
            <Form />
        </Fragment>
    )
}

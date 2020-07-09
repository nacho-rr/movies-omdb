import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Form from './components/Form'

export default function App() {
    return (
        <Fragment>
            <Router>
                <nav className="navbar navbar-dark bg-primary">
                    <Link className="navbar-brand" to='/'>
                        MOVIES APP
                    </Link>
                </nav>
                <Route path='/'>
                    <Form />
                </Route>
            </Router>
        </Fragment>
    )
}

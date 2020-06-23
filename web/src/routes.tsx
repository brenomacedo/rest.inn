import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Register from './screens/Register'
import Success from './screens/Success'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Register} path='/register' exact />
            <Route component={Success} path='/success' exact />
        </BrowserRouter>
    )
}

export default Routes
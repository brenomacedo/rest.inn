import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Register from './screens/Register'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Register} path='/register' exact />
        </BrowserRouter>
    )
}

export default Routes
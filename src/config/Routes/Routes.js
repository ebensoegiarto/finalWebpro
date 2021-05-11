import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import About from '../../pages/About/About'
import Daftar from '../../pages/Daftar/Daftar'
import Home from '../../pages/Home/Home'

const Routes = () => {
    return (
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Daftar">
            <Daftar />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
        </Router>
    )
}

export default Routes
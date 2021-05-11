import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="#">Bitung Marathon 2021</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/Daftar">Daftar</Link>
      <Link className="nav-link" to="/About">Info</Link>
      {/* <a className="nav-item nav-link" href="#">Pricing</a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
    </div>
  </div>
</nav>
    )
}

export default Navbar
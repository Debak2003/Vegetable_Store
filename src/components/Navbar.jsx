import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import logo from '../components/image/logo.png'
const Navbar = () => {
  return (
    <div className="container-fluid sticky-top">
<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src={logo} height={50} width={50} /></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><Link to={'/'} style={{textDecoration:'none',color:'black'}} >Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to={'/Delivery'} style={{textDecoration:'none',color:'black'}} >Delivery</Link></a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#"><Link to={'/Healthy'} style={{textDecoration:'none',color:'black'}}>Healthy</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to={'/Product'} style={{textDecoration:'none',color:'black'}}>Products</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to={'/Contact'} style={{textDecoration:'none',color:'black'}}>Contact US</Link></a>
        </li>
      </ul>
      <a className="nav-link " href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart me-3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
</nav>
    </div>
  )
}

export default Navbar
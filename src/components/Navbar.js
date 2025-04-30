import React from 'react'
import { Link } from 'react-router';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
        
      </ul>
      <div className={`form-check form-switch ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
      <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode === "light" ? 'Enable Dark mode' : 'Disable Dark mode'}</label>
    </div>
    </div>
  </div>
</nav>
  )
}

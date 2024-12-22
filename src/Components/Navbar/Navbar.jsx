import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
    
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top p-0 px-4 px-lg-5">
        <Link className="navbar-brand mt-4" style={{color:"#319e5e" , fontSize: "33px"}} to={'/'}>Camera's Security</Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
                <Link to={'/'} class="nav-item nav-link active">Home</Link>
                <Link to={'/about'} class="nav-item nav-link">About</Link>
                <Link to={'/service'} class="nav-item nav-link">Service</Link>
                <Link to={'/contact'} class="nav-item nav-link">Contact</Link>
            </div>
        </div>
    </nav>
  

      
    </div>
  )
}

export default Navbar

import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link active">
                    Home
            </Link>
            <Link to='/about' className="nav-link active">
                    About
            </Link>
            <Link to='/login' className="nav-link active">
                    Login
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

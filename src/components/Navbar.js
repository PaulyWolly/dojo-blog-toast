/* eslint-disable jsx-a11y/anchor-is-valid */
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">The Dojo Blog</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <form className="mx-auto" >
            <ul className="navbar-nav">
              <li className="nav-item ">
                  <NavLink className='nav-link link ' to="/">Home</NavLink>
              </li>
              <li className="nav-item ">
                  <NavLink className='nav-link link' to="/Create">Create Blog</NavLink>
              </li>
            </ul>
          </form>
        </div>
    </nav>
  );
}

export default Navbar;

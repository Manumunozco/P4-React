import { NavLink } from "react-router-dom";
import "./NavBar.css";
import iconImage from '../assets/search.png';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body">
        <div className="container-fluid">
          {/* <NavLink className="navbar-brand" to="/">
            Oli-Bakery
          </NavLink> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  Our Story
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Booking">
                  Booking
                </NavLink>
              </li>
            </ul>
            <li className="collapse navbar-collapse nav-item navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-link" to="/Booking">
                  Contact
                </NavLink>
              </li>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="" type="submit">
                <div className="iconNav">
                <img src={iconImage} alt="Search Icon" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

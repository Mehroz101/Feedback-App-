import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">MOJI</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div className={`navlink ${isMenuOpen ? "show" : "hide"}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                ClassRooms
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={toggleMenu}>
                Profile
              </Link>
            </li>
            {localStorage.getItem("feedbackapptoken") ? (
              <li>
                <Link
                  onClick={() => {
                    localStorage.removeItem("feedbackapptoken");
                    window.location.reload();
                  }}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

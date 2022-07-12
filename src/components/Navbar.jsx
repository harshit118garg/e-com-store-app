import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-around">
          <Link className="navbar-brand" to="/">
            My Shopping Cart
          </Link>
          <div className="cart">
            <Link to="/cart">
              <button className="btn fs-4 fw-bold">
                <i className="fa fa-cart-arrow-down"></i> Cart (0)
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

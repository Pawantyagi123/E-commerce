import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.count);

  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:"white"}}>E-commerce</Link>
        <Link to="/cart" className="navbar-brand">
          <button type="button" className="btn position-relative">
            <FaShoppingCart style={{ fontSize: "30px",color:"white" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border-0">
              {cartItems.length}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}


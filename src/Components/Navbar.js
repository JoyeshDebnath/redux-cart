import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const Items = useSelector((state) => {
    return state.cart;
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">JD Store</span>

      <div>
        <Link className="navLink" to="/">
          Home💒
        </Link>
        <Link className="navLink" to="/Cart">
          Cart🛒
        </Link>
      </div>
      <span className="cartCount">Cart Items:{Items.length}</span>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="bg-grey flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo biblio-mimosa" className="h-24" />
      </Link>
      <Link
        to="/login"
        type="button"
        className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2 mr-4"
      >
        Connexion
      </Link>
    </div>
  );
}

export default Navbar;

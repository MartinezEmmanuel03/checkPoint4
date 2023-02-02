import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="bg-grey flex justify-between items-center">
      <img src={logo} alt="logo biblio-mimosa" className="h-24" />
      <button
        type="button"
        className="rounded-2xl bg-brown text-white p-2 mr-4"
      >
        Connexion
      </button>
    </div>
  );
}

export default Navbar;

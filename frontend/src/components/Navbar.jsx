import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../contexts/User";
import logo from "../assets/logo.png";

function Navbar() {
  const { user, logout } = useContext(User.UserContext);
  const navigate = useNavigate("");

  const getLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-grey flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo biblio-mimosa" className="h-24" />
      </Link>
      {user ? (
        <button
          type="button"
          onClick={() => getLogout()}
          className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2 mr-4"
        >
          Deconnexion
        </button>
      ) : (
        <Link
          to="/login"
          type="button"
          className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2 mr-4"
        >
          Connexion
        </Link>
      )}
    </div>
  );
}

export default Navbar;

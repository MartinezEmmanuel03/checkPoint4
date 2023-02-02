import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [connexion, setConnexion] = useState({
    login: "",
    password: "",
  });

  const handleConnexion = (place, value) => {
    const newConnexion = { ...connexion };
    newConnexion[place] = value;
    setConnexion(newConnexion);
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink my-20">
        <h2 className="text-center text-4xl font-bold mt-4 font-poppins">
          Connexion
        </h2>
        <form className="bg-white   px-8 pt-6 pb-8 mb-4">
          <input
            required
            className="shadow appearance-none border rounded-full w-full text-white bg-grey py-2 px-3 text-black placeholder-black"
            id="Email"
            name="login"
            value={connexion.login}
            type="text"
            placeholder="Email"
            onChange={(e) => handleConnexion(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow appearance-none border rounded-full w-full text-white mt-4 py-2 bg-grey px-3 text-black placeholder-black"
            id="Mot de passe"
            name="password"
            value={connexion.password}
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => handleConnexion(e.target.name, e.target.value)}
          />
        </form>
        <div className="mt-4 flex flex-col items-center mb-6">
          <button
            type="submit"
            className="rounded-full font-roboto px-6 py-1 bg-brown text-white border border-brown hover:bg-white hover:text-brown text-xl"
          >
            Valider
          </button>
          <Link
            to="/register"
            className="hover:underline text-grey font-roboto font-bold mt-2"
          >
            pas encore inscrit?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

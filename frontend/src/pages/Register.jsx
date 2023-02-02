import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [registration, setRegistration] = useState({
    login: "",
    password: "",
  });

  const handleRegistration = (place, value) => {
    const newRegistration = { ...registration };
    newRegistration[place] = value;
    setRegistration(newRegistration);
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className=" w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-grey my-20">
        <h2 className="text-center text-4xl font-bold mt-4 font-poppins">
          Inscription
        </h2>
        <form className="bg-white px-6 pt-6 pb-8 mb-4">
          <input
            required
            className="shadow text-white appearance-none border rounded-full w-full bg-grey py-2 px-3 text-black placeholder-black"
            id="Identifiant"
            name="login"
            value={registration.login}
            type="text"
            placeholder="Identifiant"
            onChange={(e) => handleRegistration(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow text-white appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black"
            id="Mot de passe"
            name="password"
            value={registration.password}
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => handleRegistration(e.target.name, e.target.value)}
          />
          <input
            required
            className="shadow text-white appearance-none border rounded-full w-full mt-4 py-2 px-3 bg-grey text-black placeholder-black"
            id="Confirmer mot de passe"
            type="password"
            placeholder="Confirmer mot de passe"
          />
        </form>
        <div className="mt-4 flex flex-col items-center mb-6">
          <button
            type="submit"
            className="rounded-full px-6 py-1 bg-brown border border-brown font-roboto text-white hover:bg-white hover:text-brown text-xl"
          >
            Valider
          </button>
          <Link
            to="/login"
            className="hover:underline text-grey font-roboto font-bold mt-4"
          >
            Déjà inscrit?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

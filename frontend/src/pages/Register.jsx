import React, { useState } from "react";
import apiConnexion from "@services/apiConnexion";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const toastifyConfig = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function Register() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registration, setRegistration] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigate("");

  const handleRegistration = (place, value) => {
    const newRegistration = { ...registration };
    newRegistration[place] = value;
    setRegistration(newRegistration);
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (registration.password !== confirmPassword) {
      toast.error(
        `Les deux mots de passe doivent être identiques`,
        toastifyConfig
      );
    } else {
      apiConnexion
        .post("/register", registration)
        .then(() => {
          toast.success(
            `Votre inscription a bien été effectuée`,
            toastifyConfig
          );
          setTimeout(() => navigate("/"), 2000);
        })
        .catch((err) => {
          toast.error(
            `Veuillez vérifier vos champs, votre inscription n'a pas été validée`,
            toastifyConfig
          );
          console.warn(err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className=" w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-grey my-20">
        <h2 className="text-center text-4xl font-bold mt-4 font-poppins">
          Inscription
        </h2>
        <form className="bg-white px-6 pt-6 pb-8 mb-4">
          <input
            onSubmit={(e) => sendForm(e)}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="mt-4 flex flex-col items-center mb-6">
            <button
              type="submit"
              onClick={(e) => sendForm(e)}
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
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Register;

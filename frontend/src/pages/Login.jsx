import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "../services/apiConnexion";
import User from "../contexts/User";
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

function Login() {
  const [connexion, setConnexion] = useState({
    login: "",
    password: "",
  });
  const userContext = useContext(User.UserContext);
  const navigate = useNavigate("");

  const handleConnexion = (place, value) => {
    const newConnexion = { ...connexion };
    newConnexion[place] = value;
    setConnexion(newConnexion);
  };

  const sendForm = (e) => {
    e.preventDefault();
    apiConnexion
      .post("/login", connexion)
      .then((data) => {
        userContext.handleUser(data.data);
        toast.success(`Bonjour cher voisin`, toastifyConfig);
        setTimeout(() => navigate("/"), 2000);
      })
      .catch(() => {
        toast.error(
          `Votre identifiant ou votre mot de passe n'est pas valide`,
          toastifyConfig
        );
      });
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-grey my-20">
        <h2 className="text-center text-4xl font-bold mt-4 font-poppins">
          Connexion
        </h2>
        <form
          className="bg-white   px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => sendForm(e)}
        >
          <input
            required
            className="shadow appearance-none border rounded-full w-full text-white bg-grey py-2 px-3 text-black placeholder-black"
            id="Identifiant"
            name="login"
            value={connexion.login}
            type="text"
            placeholder="Identifiant"
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

          <div className="mt-4 flex flex-col items-center mb-6">
            <button
              type="submit"
              className="rounded-full font-roboto px-6 py-1 bg-brown text-white border border-brown hover:bg-white hover:text-brown transition-colors duration-300 text-xl"
            >
              Valider
            </button>
            <Link
              to="/register"
              className="hover:underline text-grey font-roboto font-bold mt-4"
            >
              pas encore inscrit?
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

export default Login;

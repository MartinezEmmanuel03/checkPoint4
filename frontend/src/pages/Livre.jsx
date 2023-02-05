import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "../services/apiConnexion";
import "react-toastify/dist/ReactToastify.css";
import User from "../contexts/User";

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

function Livre() {
  const { user } = useContext(User.UserContext);
  const { id } = useParams();
  const [livre, setLivre] = useState({});
  const navigate = useNavigate("");

  const getLivre = () => {
    apiConnexion
      .get(`/livres/${id}`)
      .then((bouquin) => {
        setLivre(bouquin.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getLivre();
  }, []);

  const changeDisponible = () => {
    const query = { disponible: 0 };
    apiConnexion
      .put(`/livres/${livre.id}`, query)
      .then(() => {
        getLivre();
      })
      .catch(() => {
        toast.error(`Une erreur est survenue`, toastifyConfig);
      });
  };

  const postEmprunt = () => {
    const query = { livres_id: livre.id };
    apiConnexion
      .post(`/emprunts`, query)
      .then(
        toast.success(
          "Vous avez bien emprunté ce livre, n'oubliez pas d'aller le chercher",
          toastifyConfig
        )
      )
      .catch(() => {
        toast.error(`Une erreur est survenue`, toastifyConfig);
      });
  };

  const createEmprunt = () => {
    if (!user) {
      toast.warn("Connectez vous pour emprunter ce livre", toastifyConfig);
    } else if (livre.disponible === 0) {
      toast.warn(
        "Ce livre est déjà prêté, Choisissez en un autre",
        toastifyConfig
      );
      setTimeout(() => navigate("/livres"), 2000);
    } else {
      changeDisponible();
      postEmprunt();
      setTimeout(() => navigate("/livres"), 2000);
    }
  };

  return (
    <div>
      <div className="mt-3 ml-2">
        <Link
          to="/livres"
          className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2 px-6"
        >
          Retour
        </Link>
      </div>
      <div className="lg:flex lg:pt-6 mb-12 lg:mt-8">
        <div className="lg:w-1/2">
          <h1 className="text-grey lg:text-5xl text-4xl font-extrabold text-center pt-20 md:pt-8 font-poppins mb-6">
            {livre.titre}
          </h1>
          <h2 className="text-grey lg:text-3xl text-2xl font-extrabold text-center  font-poppins">
            Par {livre.auteur}
          </h2>
        </div>
        <div className="md:flex md:items-center mt-10">
          <p className="text-grey lg:text-2xl text-xl font-extrabold text-center  font-roboto mb-6 px-2 lg:px-6">
            {livre.resume}
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <button
          type="button"
          onClick={() => createEmprunt()}
          className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2 px-4"
        >
          Emprunter
        </button>
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

export default Livre;

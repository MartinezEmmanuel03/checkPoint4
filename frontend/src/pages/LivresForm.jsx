import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "@services/apiConnexion";
import PersonnalSpaceLinks from "@components/PersonnalSpaceLinks";
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

function LivresForm() {
  const { user } = useContext(User.UserContext);
  const [titreLivres, setTitreLivres] = useState([]);
  const [livre, setLivre] = useState({
    titre: "",
    auteur: "",
    resume: "",
  });

  const handleLivre = (place, value) => {
    const newLivre = { ...livre };
    newLivre[place] = value;
    setLivre(newLivre);
  };

  const getTitreLivres = () => {
    apiConnexion
      .get(`/livresByConnexionId/${user.id}`)
      .then((titres) => {
        setTitreLivres(titres.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTitreLivres();
  }, []);

  const sendLivre = () => {
    apiConnexion
      .post("/livres", livre)
      .then(() => {
        toast.success(`${livre.titre} a bien été ajouté.`, toastifyConfig);
        getTitreLivres();
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite", toastifyConfig);
        console.error(err);
      });
  };

  const deleteLivre = (id) => {
    apiConnexion
      .delete(`livres/${id}`)
      .then(() => {
        toast.success("Votre livre a bien été supprimé", toastifyConfig);
        getTitreLivres();
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite", toastifyConfig);
        console.error(err);
      });
  };

  return (
    <div className="items-center flex flex-col justify-center w-full px-6 bg-white pt-12">
      <PersonnalSpaceLinks />
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-grey-600/40 ring-2 ring-grey lg:max-w-xl">
        <h1 className="text-center text-4xl font-bold mt-4 font-poppins text-grey ">
          Ajouter un livre
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <input
              required
              type="text"
              name="titre"
              value={livre.titre}
              onChange={(e) => handleLivre(e.target.name, e.target.value)}
              className="
                  w-full
                  pl-4 py-2 mt-2
                  border
                  border-grey
                  bg-grey
                  text-grey
                  rounded-md
                  shadow-sm
                  bg-opacity-10"
              placeholder="Titre"
            />
            <input
              required
              type="text"
              name="auteur"
              value={livre.auteur}
              onChange={(e) => handleLivre(e.target.name, e.target.value)}
              className="
                  w-full
                  pl-4 py-2 mt-2
                  border
                  border-grey
                  bg-grey
                  text-grey
                  rounded-md
                  shadow-sm
                  bg-opacity-10"
              placeholder="Auteur"
            />
            <textarea
              className="w-full mt-2 rounded-md  border-grey
              bg-grey
              border
              text-grey bg-opacity-10 pl-4 pt-2 h-40 pr-2"
              required
              type="text"
              maxLength="200"
              name="resume"
              value={livre.resume}
              placeholder="Résumé (200 caractères max)"
              onChange={(e) => handleLivre(e.target.name, e.target.value)}
            />
            <button
              type="button"
              onClick={() => sendLivre()}
              className="
                  w-40
                  bg-brown
                  mt-4
                  mr-10
                  transition duration-300
                  hover:bg-white
                  hover:text-brown
                  text-white
                  border
                  border-brown
                  font-bold
                  font-roboto
                  py-2 px-4
                  pl-2 rounded"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 w-full">
        <h1 className="text-center text-3xl font-bold my-4 font-poppins text-grey">
          Ma liste de livres
        </h1>
        <div className="w-full mb-10 mt-8">
          <div className="flex w-full border-b">
            <p className="text-start pl-4 text-grey w-3/4">Titre</p>
            <p className="text-center text-grey w-1/4">Supprimer</p>
          </div>
          <div>
            {titreLivres.length === 0 ? (
              <h2 className="text-center text-grey mt-8 font-bold font-p">
                Il n'y a aucun livre dans votre liste pour le moment
              </h2>
            ) : (
              titreLivres.map((titre) => (
                <div className="flex w-full mt-2 text-grey hover:bg-grey hover:text-white transition-colors duration-300">
                  <h3 className="text-start pl-4 w-3/4">{titre.titre}</h3>
                  <button
                    type="button"
                    onClick={() => deleteLivre(titre.id)}
                    className="text-center w-1/4 hover:underline"
                  >
                    Supprimer
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
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

export default LivresForm;

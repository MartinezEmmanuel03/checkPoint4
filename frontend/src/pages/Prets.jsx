import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "@services/apiConnexion";
import PersonnalSpaceLinks from "@components/PersonnalSpaceLinks";
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

function Prets() {
  const [listeLivresPretes, setListeLivresPretes] = useState([]);

  const changeDisponible = (id) => {
    const query = { disponible: 1 };
    apiConnexion.put(`/livres/${id}`, query).catch(() => {
      toast.error(`Une erreur est survenue`, toastifyConfig);
    });
  };

  const confirmLivreRendu = (id) => {
    apiConnexion
      .put(`/emprunts/${id}`)
      .then(
        toast.success(
          "Le retour de votre livre a bien été enregistré",
          toastifyConfig
        )
      )
      .catch(() => {
        toast.error(`Une erreur est survenue`, toastifyConfig);
      });
  };

  const getListeLivresPretes = () => {
    apiConnexion
      .get(`/emprunts`)
      .then((liste) => {
        setListeLivresPretes(liste.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getListeLivresPretes();
  }, []);

  const rendreLivre = (id) => {
    changeDisponible(id);
    confirmLivreRendu(id);
    setTimeout(() => getListeLivresPretes(), 1000);
  };

  return (
    <div className="items-center flex flex-col justify-center w-full bg-white pt-12">
      <PersonnalSpaceLinks />
      <div className="w-full m-auto mb-8">
        <h1 className="text-center text-4xl font-bold mt-4 font-poppins text-grey">
          Mes livres prêtés
        </h1>
        <div className="w-full mb-12 mt-10 min-h-0">
          <div className="border-b flex">
            <p className="text-center text-grey w-2/6 pb-6">Emprunteur</p>
            <p className="text-center text-grey w-2/6 pb-6">Livre</p>
            <p className="text-center text-grey w-1/6 pb-6">Date de prêt</p>
            <p className="text-center text-grey w-1/6 pb-6">Retour</p>
          </div>
        </div>
        {listeLivresPretes.length === 0 ? (
          <h2 className="text-center text-2xl font-bold my-4 font-poppins text-grey px-2">
            Vous n'avez pas prêté de livres pour le moment
          </h2>
        ) : (
          listeLivresPretes.map((livre) => (
            <div className="flex text-sm">
              <p className="text-center text-grey w-2/5 pb-6">{livre.login}</p>
              <p className="text-center text-grey w-2/5 pb-6">{livre.titre}</p>
              <p className="text-center text-grey w-1/5 pb-6">
                {livre.dateEmprunt.split("T").shift()}
              </p>
              <button
                type="button"
                onClick={() => rendreLivre(livre.id)}
                className="text-center text-grey w-1/5 pb-6 self-start hover:underline"
              >
                Rendu
              </button>
            </div>
          ))
        )}
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

export default Prets;

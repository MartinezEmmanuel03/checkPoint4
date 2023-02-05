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

  const getListeLivresPretes = () => {
    apiConnexion
      .get(`/emprunts`)
      .then((liste) => {
        setListeLivresPretes(liste.data);
        toast("hello", toastifyConfig);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getListeLivresPretes();
  }, []);

  return (
    <div className="items-center flex flex-col justify-center w-full bg-white pt-12">
      <PersonnalSpaceLinks />
      <div className="w-full m-auto mb-8">
        <h1 className="text-center text-4xl font-bold mt-4 font-poppins text-grey">
          Mes livres prêtés
        </h1>
        <div className="w-full mb-12 mt-10 min-h-0">
          <div className="border-b flex">
            <p className="text-center text-grey w-2/5 pb-6">Emprunteur</p>
            <p className="text-center text-grey w-2/5 pb-6">Livre</p>
            <p className="text-center text-grey w-1/5 pb-6">Retour</p>
          </div>
        </div>
        {listeLivresPretes.length === 0 ? (
          <h2 className="text-center text-2xl font-bold my-4 font-poppins text-grey">
            Vous n'avez pas de livres empruntés pour le moment
          </h2>
        ) : (
          listeLivresPretes.map((livre) => (
            <div className="flex">
              <p className="text-center text-grey w-2/5 pb-6">{livre.login}</p>
              <p className="text-center text-grey w-2/5 pb-6">{livre.titre}</p>
              <button
                type="button"
                className="text-center text-grey w-1/5 pb-6"
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

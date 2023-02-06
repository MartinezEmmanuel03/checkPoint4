import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import PersonnalSpaceLinks from "@components/PersonnalSpaceLinks";

function Emprunts() {
  const [listeLivresEmpruntes, setListeLivresEmpruntes] = useState([]);

  const getListeLivresEmpruntes = () => {
    apiConnexion
      .get(`/prets`)
      .then((liste) => {
        setListeLivresEmpruntes(liste.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getListeLivresEmpruntes();
  }, []);

  return (
    <div className="items-center flex flex-col justify-center w-full bg-white pt-12">
      <PersonnalSpaceLinks />
      <div className="w-full m-auto mb-8">
        <h1 className="text-center text-4xl font-bold mt-4 font-poppins text-grey">
          Mes livres empruntés
        </h1>
        <div className="w-full mb-12 mt-10 min-h-0">
          <div className="border-b flex">
            <p className="text-center text-grey w-2/5 pb-6">Prêteur</p>
            <p className="text-center text-grey w-2/5 pb-6">Livre</p>
            <p className="text-center text-grey w-1/5 pb-6">Date de prêt</p>
          </div>
        </div>
        {listeLivresEmpruntes.length === 0 ? (
          <h2 className="text-center text-2xl font-bold my-4 font-poppins text-grey">
            Vous n'avez pas emprunté de livres pour le moment
          </h2>
        ) : (
          listeLivresEmpruntes.map((livre) => (
            <div className="flex text-sm">
              <p className="text-center text-grey w-2/5 pb-6">{livre.login}</p>
              <p className="text-center text-grey w-2/5 pb-6">{livre.titre}</p>
              <p className="text-center text-grey w-1/5 pb-6">
                {livre.dateEmprunt.split("T").shift()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Emprunts;

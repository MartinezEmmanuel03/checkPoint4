import React, { useState } from "react";
import PersonnalSpaceLinks from "@components/PersonnalSpaceLinks";

function LivresForm() {
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
      <div className="mt-6">
        <h1 className="text-center text-3xl font-bold my-4 font-poppins text-grey">
          Ma liste de livres
        </h1>
        <table className="table-fixed w-full border-collapse mb-10 mt-8">
          <thead>
            <tr>
              <th className="text-start pl-4 text-grey w-3/4">Titre</th>
              <th className="text-center text-grey w-1/4">Supprimer</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    </div>
  );
}

export default LivresForm;

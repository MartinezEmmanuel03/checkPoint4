import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "../services/apiConnexion";
import favicon from "../../public/favicon.png";

function Livres() {
  const [listLivres, setListLivres] = useState([]);

  const getListeLivres = () => {
    apiConnexion
      .get(`/livres`)
      .then((livres) => {
        setListLivres(livres.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getListeLivres();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Livres</title>
        <meta
          name="description"
          content="Liste des livres disponibles à l'emprunt sur le site BIBLIO-MIMOSA"
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <h1 className="text-grey md:text-5xl text-4xl font-extrabold text-center pt-20 font-poppins mb-6">
        Livres
      </h1>
      <div className="flex w-11/12 mx-auto border-b mt-12">
        <p className="text-center text-grey w-2/4 mr-8">Titre</p>
        <p className="text-center text-grey w-2/4">Propriétaire</p>
      </div>
      <div className="my-12">
        {listLivres.length === 0 ? (
          <h2 className="text-center text-grey mt-8 font-bold font-p mb-44">
            Il n'y a aucun livre disponible pour le moment
          </h2>
        ) : (
          listLivres.map((livre) => (
            <div className="flex w-full mt-4 text-grey">
              <Link
                to={`/livres/${livre.id}`}
                className="text-center hover:underline w-2/4"
              >
                {livre.titre}
              </Link>
              <p className="text-center w-2/4">{livre.login}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Livres;

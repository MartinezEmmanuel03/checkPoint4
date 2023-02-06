import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import User from "../contexts/User";
import image from "../assets/livres.png";
import favicon from "../../public/favicon.png";

export default function Home() {
  const { user } = useContext(User.UserContext);
  return (
    <div className="bg-white flex flex-col items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <meta
          name="description"
          content="Page d'accueil du site BIBLIO-MIMOSA"
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      {user && (
        <div className="flex justify-end mt-2">
          <Link
            to="/livresForm"
            className="rounded-2xl bg-brown border border-brown text-white hover:text-brown hover:bg-white transition-colors duration-300 p-2"
          >
            Espace personnel
          </Link>
        </div>
      )}
      <h1 className="text-grey md:text-5xl text-4xl font-extrabold text-center pt-20 font-poppins mb-6">
        BIBLIO-MIMOSA
      </h1>
      <img src={image} alt="livres" className="w-1/3 md:w-1/5" />
      <p className="text-center text-grey md:text-2xl font-bold mt-6 px-10 font-poppins">
        Partagez votre goût de la lecture avec vos voisins de la résidence des
        mimosas
      </p>
      <Link
        to="/livres"
        className="bg-brown text-white font-roboto border md:text-2xl md:p-4 md:rounded-3xl border-brown hover:bg-white hover:text-brown transition-colors duration-300 rounded-2xl p-2 mt-16 mb-16"
      >
        Voir livres disponibles
      </Link>
    </div>
  );
}

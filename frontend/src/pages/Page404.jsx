import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex flex-col items-center">
      <img
        alt="livre 404"
        src="https://products-images.di-static.com/image/herve-decca-404-not-found/9782330010805-475x500-1.webp"
      />
      <h1 className="font-bold font-roboto text-grey text-xl px-2">
        Ce livre existe mais nous ne l'avons pas...
      </h1>
      <p className="font-bold font-roboto text-grey text-xl px-2">
        Par contre vous trouverez surement votre bonheur{" "}
        <Link className="underline" to="/livres">
          ici
        </Link>
      </p>
    </div>
  );
}

export default Page404;

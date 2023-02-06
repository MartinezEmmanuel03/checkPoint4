import React from "react";

function Footer() {
  return (
    <div className="bg-grey text-white">
      <div className="flex flex-col pl-4 pt-2 mb-12">
        <h1 className="text-xl">BIBLIO-MIMOSA</h1>
        <a
          href="https://www.youtube.com/watch?v=v7ScGV5128A"
          className="hover:underline"
        >
          à propos
        </a>
      </div>
      <p className="text-center pb-4">
        Copyright - BIBLIO-MIMOSA - Tous droits réservés
      </p>
    </div>
  );
}

export default Footer;

import React from "react";
import PersonnalSpaceLinks from "@components/PersonnalSpaceLinks";

function Prets() {
  return (
    <div className="items-center flex flex-col justify-center w-full bg-white pt-12">
      <PersonnalSpaceLinks />
      <div className="w-full m-auto mb-8">
        <h1 className="text-center text-4xl font-bold mt-4 font-poppins text-grey">
          Mes livres prêtés
        </h1>
        <table className="table-fixed w-full border-collapse mb-12 mt-10 min-h-0">
          <thead className="border-b">
            <tr>
              <th className="text-center text-grey w-2/5 pb-6">Emprunteur</th>
              <th className="text-center text-grey w-2/5 pb-6">Livre</th>
              <th className="text-center text-grey w-1/5 pb-6">Retour</th>
            </tr>
          </thead>
          <tbody />
        </table>
        <h2 className="text-center text-2xl font-bold my-4 font-poppins text-grey">
          Vous n'avez pas de livres empruntés pour le moment
        </h2>
      </div>
    </div>
  );
}

export default Prets;

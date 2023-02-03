import React from "react";
import { Link } from "react-router-dom";

const personnalSpaceLinks = () => {
  return (
    <div className="flex justify-around w-full mb-8">
      <Link
        to="/livresForm"
        className=" transition duration-300
                  hover:bg-white
                  bg-brown
                  hover:text-brown
                  text-white
                  border
                  border-brown
                  font-bold
                  font-roboto
                  py-2 px-4
                  rounded-2xl"
      >
        Mes livres
      </Link>
      <Link
        to="/prets"
        className=" transition duration-300
                  hover:bg-white
                  bg-brown
                  hover:text-brown
                  text-white
                  border
                  border-brown
                  font-bold
                  font-roboto
                  py-2 px-4
                  rounded-2xl"
      >
        Mes prêts
      </Link>
    </div>
  );
};

export default personnalSpaceLinks;

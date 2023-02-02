import image from "../assets/livres.png";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      <h1 className="text-grey md:text-5xl text-4xl font-extrabold text-center pt-20 font-poppins mb-6">
        BIBLIO-MIMOSA
      </h1>
      <img src={image} alt="livres" className="w-1/3 md:w-1/5" />
      <p className="text-center text-grey md:text-2xl font-bold mt-6 px-10 font-poppins">
        Partagez votre goût de la lecture avec vos voisins de la résidence des
        mimosas
      </p>
      <button
        type="button"
        className="bg-brown text-white font-roboto border md:text-2xl md:p-4 md:rounded-3xl border-brown hover:bg-white hover:text-brown rounded-2xl p-2 mt-16 mb-16"
      >
        Voir livres disponibles
      </button>
    </div>
  );
}

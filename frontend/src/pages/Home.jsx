export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      <h1 className="text-grey text-4xl font-bold text-center pt-20">
        BIBLIO-MIMOSA
      </h1>
      <p className="text-center text-grey font-bold mt-12 px-8">
        Partagez votre goût de la lecture avec vos voisins de la résidence des
        mimosas
      </p>
      <button
        type="button"
        className="bg-brown text-white border border-brown hover:bg-white hover:text-brown rounded-2xl p-2 mt-16 mb-16"
      >
        Voir livres disponibles
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CardMission({ missao, label, favoritar }) {

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoritas = JSON.parse(localStorage.getItem("missoesFavoritas")) || [];

    if (favoritas.some((mission) => mission.id === missao.id)) {
      setIsFavorited(true);
    }
  }, [missao.id]);

  const aoFavoritar = (e) => {
    e.preventDefault();
    favoritar(missao);

    setIsFavorited((state) => !state);
  };

  return (
    <Link
      to={`/mission/${missao.id}`}
      className="relative w-full border rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-darkBege cursor-pointer"
    >
      <h3 className="text-center py-5 uppercase font-semibold">{label}</h3>
      <FaStar
        className={`absolute top-4 right-4 w-6 h-6 duration-100 transition ${isFavorited ? "text-yellow-500" : "text-gray-700"
          }`}
        onClick={aoFavoritar}
      />
      <div className="flex flex-col items-center py-10 px-5">
        <i
          className={`${missao.icone} animate-float text-center text-[55px]`}
        ></i>
        <div className="mt-6 flex items-center gap-2 flex-col text-center">
          <h5 className="text-xl font-medium text-gray-900">{missao.titulo}</h5>
          <p className="text-sm text-gray-500">{missao.subtitulo}</p>
        </div>
      </div>
    </Link>
  );
}

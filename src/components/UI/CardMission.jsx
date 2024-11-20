// import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CardMission({ id, icone, titulo, descrisao, pontos }) {
  // const [isFavorited, setIsFavorited] = useState(false);

  // const toggleFavorite = () => {
  //   setIsFavorited(!isFavorited);
  // };

  return (
    <Link to={`/mission/${id}`} className="relative w-full border rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-slate-50 cursor-pointer">
      <h3 className="text-center py-5 uppercase font-semibold">Missão Diaria</h3>
      <FaStar className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 w-6 h-6 duration-100 transition"/>
      {/* // onClick={toggleFavorite} */}
      {/* <FaStar className={`w-6 h-6 ${isFavorited ? "text-yellow-500" : "text-gray-400"}`} /> */}

      <div className="flex flex-col items-center py-10 px-5">
        {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" /> */}
        {icone}
        
        <div className="mt-6 flex items-center gap-2 flex-col text-center">
          <h5 className="text-xl font-medium text-gray-900">{titulo}</h5>
          <p className="text-sm text-gray-500">{descrisao}</p>
        </div>
      </div>
    </Link>
  );
}

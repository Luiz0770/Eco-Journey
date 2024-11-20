import { useParams } from "react-router-dom";
import missions from "../data/missoes.json";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MissionDetail() {

    const { missionId } = useParams();
    const [missoesFavoritadas, setMissoesFavoritadas] = useState([])
    const [isFavorited, setIsFavorited] = useState(false);

    const allMission = [...missions.missoesDiarias, ...missions.missoesSemanais, ...missions.missoesEspeciais];
    const missaoSelecionada = allMission.find(missao => missao.id == missionId);


    useEffect(() => {
        const favoritas = JSON.parse(localStorage.getItem("missoesFavoritas")) || [];
        setMissoesFavoritadas(favoritas);
        if (favoritas.some((mission) => mission.id === missaoSelecionada.id)) {
            setIsFavorited(true);
        }
    }, []);

    function favoritar(mission) {
        if (!missoesFavoritadas.some((missao) => missao.id === mission.id)) {
            const listaAtualizada = [...missoesFavoritadas, mission];
            setMissoesFavoritadas(listaAtualizada);
            localStorage.setItem("missoesFavoritas", JSON.stringify(listaAtualizada));
        }
        else {
            const listaAtualizada = missoesFavoritadas.filter(
                (missao) => missao.id !== mission.id
            );
            setMissoesFavoritadas(listaAtualizada);
            localStorage.setItem("missoesFavoritas", JSON.stringify(listaAtualizada));
        }
    }

    const aoFavoritar = (mission) => {
        favoritar(mission)
        setIsFavorited((state) => !state);
    };

    if (!missaoSelecionada) {
        return (
            <>
                <div className="mt-5 p-5 text-center font-semibold text-2xl">
                    <h2>Missão não encontrada!</h2>
                </div>
            </>
        )
    }

    console.log(missaoSelecionada)

    return (
        <div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
                {/* Image */}
                <i className={`${missaoSelecionada.icone} animate-float text-center text-[150px]`} ></i>
                
                {/* Infos */}
                <div className="p-5 flex flex-col gap-3 md:w-3/4">
                    <h3 className="font-semibold text-3xl">{missaoSelecionada.titulo}</h3>
                    <p className="font-medium text-lg">{missaoSelecionada.descricao}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-lg">Pontos: <span className="text-xl font-semibold">{missaoSelecionada.pontos}</span></p>
                        <FaStar
                            className={`w-6 h-6 duration-100 transition ${isFavorited ? "text-yellow-500" : "text-gray-400"}`}
                            onClick={() => aoFavoritar(missaoSelecionada)}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

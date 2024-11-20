import { useEffect, useState } from "react";
import Accordion from "../components/UI/Accordion";
import CardMission from "../components/UI/CardMission";
import missions from "../data/missoes.json";

export default function Mission() {

    const [missoesFavoritadas, setMissoesFavoritadas] = useState([])

    useEffect(() => {
        const favoritas = JSON.parse(localStorage.getItem("missoesFavoritas")) || [];
        setMissoesFavoritadas(favoritas);
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

    return (
        <section id="mission" className="mt-16">
            <h2 className="mb-8 text-center font-semibold text-5xl">Missões</h2>
            <div className="w-10/12 mx-auto flex flex-col gap-3">

                {/* Missoes Diarias */}
                <Accordion titulo={"Missoes Diarias"}>
                    {missions.missoesDiarias.map(missao =>
                        <CardMission
                            key={missao.id}
                            missao={missao}
                            favoritar={favoritar}
                            label={"Missão Diaria"}
                        />)}
                </Accordion>

                {/* Missoes Semanais */}
                <Accordion titulo={"Missoes Semanais"}>
                    {missions.missoesSemanais.map(missao =>
                        <CardMission
                            key={missao.id}
                            missao={missao}
                            favoritar={favoritar}
                            label={"Missão Semanal"}
                        />)}
                </Accordion>

                {/* Missoes Especiais */}
                <Accordion titulo={"Missoes Especiais"}>
                    {missions.missoesEspeciais.map(missao =>
                        <CardMission
                            key={missao.id}
                            missao={missao}
                            favoritar={favoritar}
                            label={"Missão Especial"}
                        />)}
                </Accordion>
            </div>
        </section>
    );
}

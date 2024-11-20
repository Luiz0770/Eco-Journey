import { useParams } from "react-router-dom";
import missions from "../data/missoes.json";
import BtnFavoritar from "../components/UI/BtnFavoritar";

export default function MissionDetail() {
    const { missionId } = useParams();

    // Encontra a missão correspondente ao missionId
    const missaoSelecionada = missions.find(missao => missao.id == missionId);

    // Caso a missão não seja encontrada, exibe uma mensagem apropriada
    if (!missaoSelecionada) {
        return <p>Missão não encontrada.</p>;
    }

    console.log(missaoSelecionada)

    return (
        <div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 items-center">
                <i className={`${missaoSelecionada.icone} animate-float text-center text-[150px]`} ></i>
                <div className="flex flex-col gap-1 max-w-max">
                    <h3 className="font-semibold text-3xl">{missaoSelecionada.titulo}</h3>
                    <p className="font-medium text-lg">{missaoSelecionada.descricao}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-lg">Pontos: <span className="text-xl font-semibold">{missaoSelecionada.pontos}</span></p>
                        <BtnFavoritar
                            funcao={() => filmesAssistir(movie)}
                            color={"red-800"}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

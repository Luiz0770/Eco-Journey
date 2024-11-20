import { FaTrophy } from "react-icons/fa";

export default function LabelRanking({ posicao, nome, pontos }) {
    return (
        <div className="w-full md:w-4/5 mx-auto py-3 px-5 flex items-center justify-between bg-green-300 hover:bg-green-400 max-h-fit rounded-lg">
            <div className="flex gap-2 items-center">
                {posicao}
                <FaTrophy className="mr-4"/>
                <h4>{nome}</h4>
            </div>
            <div >
                {pontos}
            </div>
        </div>
    );
}
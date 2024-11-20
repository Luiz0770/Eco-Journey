import { useEffect, useState } from "react";
import LabelRanking from "../components/UI/LabelRanking";

export default function Ranking() {

    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPeople = await fetch("https://673e50850118dbfe860aedf6.mockapi.io/api/v1/people")
                const resPeople = await fetchPeople.json();
                setPeople(resPeople)
            }
            catch (erro) {
                console.log(erro);
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    console.log(people)

    return (
        <section id="ranking" className="mt-16">
            <h2 className="mb-8 text-center font-semibold text-5xl">Ranking</h2>
            <div className="flex flex-col gap-2 p-5">
                {isLoading ?
                    <div className="flex justify-center items-center">
                        <l-dot-wave size="47" speed="1" color="black" />
                    </div>
                    :
                    people
                        .sort((a, b) => b.pontos - a.pontos)
                        .map((pessoa, idx) => (
                            <LabelRanking
                                key={pessoa.id}
                                posicao={idx + 1}
                                avatar={`${pessoa.avatar}?random=${pessoa.id}`}
                                nome={pessoa.nome}
                                pontos={pessoa.pontos}
                            />
                        ))}
            </div>
        </section>
    );
}

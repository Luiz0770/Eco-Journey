import LabelRanking from "../components/UI/LabelRanking";

export default function Ranking() {
    const pessoas = [
        { nome: "Ana Silva", pontos: 120 },
        { nome: "Carlos Souza", pontos: 95 },
        { nome: "Fernanda Oliveira", pontos: 180 },
        { nome: "João Pedro", pontos: 75 },
        { nome: "Mariana Lima", pontos: 150 },
        { nome: "Ricardo Alves", pontos: 60 },
        { nome: "Tatiane Costa", pontos: 200 },
        { nome: "Bruno Martins", pontos: 110 },
        { nome: "Sofia Menezes", pontos: 170 },
        { nome: "Guilherme Rocha", pontos: 140 }
    ];

    const pessoasOrdenadas = [...pessoas].sort((a, b) => b.pontos - a.pontos);

    return (
        <section id="ranking" className="mt-16">
            <h2 className="mb-8 text-center font-semibold text-5xl">Missões</h2>
            <div className="flex flex-col gap-2 p-5">
                {pessoasOrdenadas.map((pessoa, idx) => (
                    <LabelRanking
                        key={idx}
                        posicao={idx + 1}
                        nome={pessoa.nome}
                        pontos={pessoa.pontos}
                    />
                ))}
            </div>
        </section>
    );
}

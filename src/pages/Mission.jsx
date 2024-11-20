import { useState } from "react";
import Accordion from "../components/UI/Accordion";
import CardMission from "../components/UI/CardMission";

// Import Icons
import { MdElectricBolt } from "react-icons/md"; // Ícone de energia elétrica
import { FaTint } from "react-icons/fa"; // Ícone de gota de água
import { GiFruitBowl } from "react-icons/gi"; // Ícone de tigela de frutas
import { FaBicycle } from "react-icons/fa"; // Ícone de bicicleta
import { FaRecycle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa"; // Ícone de lixeira
import { IoPeople } from "react-icons/io5"; // Ícone de grupo de pessoas
import { GiShoppingCart } from "react-icons/gi"; // Ícone de carrinho de compras
import { BsPlug } from "react-icons/bs"; // Ícone de plug elétrico
import { GiMeat } from "react-icons/gi"; // Ícone de carne


export default function Mission() {

    const [dailyMission, setDailyMission] = useState([
        {
            "id": 1,
            "titulo": "Reduza o consumo de energia elétrica",
            "descricao": "Diminua o uso de aparelhos eletrônicos por 2 horas hoje.",
            "pontos": 10,
            "icone": <MdElectricBolt size={55} />
        },
        {
            "id": 2,
            "titulo": "Economize água",
            "descricao": "Limite o tempo no banho a 5 minutos.",
            "pontos": 15,
            "icone": <FaTint size={55} />
        },
        {
            "id": 3,
            "titulo": "Evite desperdício de alimentos",
            "descricao": "Reutilize sobras para criar uma refeição.",
            "pontos": 20,
            "icone": <GiFruitBowl size={55} />
        },
        {
            "id": 4,
            "titulo": "Faça um trajeto sustentável",
            "descricao": "Caminhe, use uma bicicleta ou transporte público.",
            "pontos": 15,
            "icone": <FaBicycle size={55} />
        },
        {
            "id": 5,
            "titulo": "Recicle materiais",
            "descricao": "Separe pelo menos 5 itens recicláveis hoje.",
            "pontos": 10,
            "icone": <FaRecycle size={55} />
        },
        {
            "id": 6,
            "titulo": "Reduza o uso de plástico descartável",
            "descricao": "Use garrafas reutilizáveis por uma semana.",
            "pontos": 55,
            "icone": <FaRegTrashAlt size={55} />
        },
        {
            "id": 7,
            "titulo": "Participe de uma ação comunitária",
            "descricao": "Junte-se a um mutirão de limpeza local.",
            "pontos": 40,
            "icone": <IoPeople size={55} />
        },
        {
            "id": 8,
            "titulo": "Planeje refeições conscientes",
            "descricao": "Compre alimentos de produtores locais.",
            "pontos": 25,
            "icone": <GiShoppingCart size={55} />
        },
        {
            "id": 9,
            "titulo": "Aumente a eficiência energética",
            "descricao": "Desligue aparelhos em stand-by por 7 dias.",
            "pontos": 20,
            "icone": <BsPlug size={55} />
        },
        {
            "id": 10,
            "titulo": "Experimente um dia sem carne",
            "descricao": "Prepare refeições vegetarianas ou veganas por um dia.",
            "pontos": 25,
            "icone": <GiMeat size={55} />
        }
    ])


    return (
        <section id="mission" className="mt-16">
            <h2 className="mb-8 text-center font-semibold text-5xl">Missões</h2>
            <div className="w-10/12 mx-auto flex flex-col gap-3">

                {/* Missoes Diarias */}
                <Accordion titulo={"Missoes Diarias"}>
                    {dailyMission.map(missao =>
                        <CardMission key={missao.id}
                            id={missao.id}
                            titulo={missao.titulo}
                            descrisao={missao.descricao}
                            pontos={missao.pontos}
                            icone={missao.icone}
                            missao={"Missão Diaria"}
                        />)}
                </Accordion>

                {/* Missoes Semanais */}
                <Accordion titulo={"Missoes Semanais"}>
                    {dailyMission.map(missao =>
                        <CardMission
                            key={missao.id}
                            titulo={missao.titulo}
                            descrisao={missao.descricao}
                            pontos={missao.pontos}
                            icone={missao.icone}
                            missao={"Missão Semanal"}
                        />)}
                </Accordion>

                {/* Missoes Especiais */}
                <Accordion titulo={"Missoes Especiais"}>
                    {dailyMission.map(missao =>
                        <CardMission
                            key={missao.id}
                            titulo={missao.titulo}
                            descrisao={missao.descricao}
                            pontos={missao.pontos}
                            icone={missao.icone}
                            missao={"Missão Especial"}
                        />)}
                </Accordion>
            </div>
        </section>
    );
}

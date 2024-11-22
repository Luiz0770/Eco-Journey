import About from "../components/About";
import CardHome from "../components/CardHome";
import Parallax from "../components/Parallax";
import Solution from "../components/Solution";

export default function Home() {
    return ( 
        <>
            <Parallax/>
            <About/>
            <CardHome/>
            <Solution/>
            <section className="mt-36 px-5">
                <div className="text-center">
                    <h2 className="font-bold text-4xl md:text-6xl text-green-800 mb-4 md:w-3/4 mx-auto">EcoJourney: Conectando Pessoas e Criando Impacto</h2>
                    <p className="text-lightgreen md:w-3/4 mx-auto text-lg">Faça parte da nossa comunidade e compartilhe dicas, conquistas e experiências. Juntos, podemos transformar o futuro!</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center mt-10  gap-3 md:gap-5 text-white">
                    <button className="py-3 px-5 bg-green-800 rounded-full">Claim Eco-Rewards</button>
                    <button className="py-3 px-5 bg-lightgreen rounded-full">Earn Eco-Badges</button>
                </div>
            </section>
        </>
     );
}

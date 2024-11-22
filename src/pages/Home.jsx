import About from "../components/About";
import CardHome from "../components/CardHome";
import Parallax from "../components/Parallax";
import Solution from "../components/Solution";
import Carrosel from "../components/UI/Carrosel";

export default function Home() {
    return ( 
        <>
            <Parallax/>
            <About/>
            <CardHome/>
            <Solution/>
            <section className="mt-36 px-5">
                <div className="text-center">
                    <h2 className="font-bold text-4xl md:text-6xl text-green-800 mb-4 md:w-3/4 mx-auto">Pequenas Mudanças Geram GRANDES Impactos.</h2>
                    <p className="text-lightgreen md:w-3/4 mx-auto text-lg">Pequenas mudanças no dia a dia podem gerar grandes impactos no nosso ambiente! Aqui estão algumas sugestões de práticas sustentáveis que qualquer pessoa pode adotar na rotina diária.</p>
                </div>
                <Carrosel/>
            </section>
        </>
     );
}


import Card from './UI/Card';

export default function CardHome() {
    return (
        <section id="cardHome" className='my-24 md:my-4 min-h-screen bg-bege'>
            <div id="cardHome-texts" className="flex flex-col text-center justify-center items-center gap-5 px-5">
                <h2 className="text-5xl text-green-800 font-semibold">A Importância da Transição Energética</h2>
                <h4 className="md:w-3/6 text-[#808C83] font-semibold text-lg md:text-base mb-5">A transição para fontes renováveis é essencial para reduzir emissões de gases de efeito estufa, promover independência energética e gerar benefícios econômicos e sociais. Apesar dos desafios como altos investimentos iniciais e a necessidade de políticas públicas eficazes, essas alternativas abre caminho para um futuro mais limpo, seguro e inovador.</h4>
                <h3 className='text-lightgreen text-xl'>Abaixo, você conhecerá as principais fontes de energia renovável e suas vantagens para transformar o mundo!</h3>
            </div>
            <div className="my-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-center items-stretch content-center px-5">
                <Card
                    titulo={"Energia Solar ☀️"}
                    texto={"A energia solar aproveita a luz do sol, que é captada por painéis fotovoltaicos e convertida em eletricidade. Essa fonte é abundante, disponível em todo o mundo e uma das formas mais limpas de gerar energia. Além de reduzir significativamente a emissão de gases de efeito estufa, também ajuda a diminuir os custos com energia elétrica. Uma curiosidade interessante é que, em apenas uma hora, a Terra recebe mais energia solar do que toda a humanidade consome em um ano."} />

                <Card
                    titulo={"Energia Eólica 🌬️"}
                    texto={"A energia eólica utiliza turbinas para transformar o movimento do vento em eletricidade. É uma fonte completamente limpa e renovável, sendo ideal tanto para grandes parques eólicos quanto para instalações menores em residências. Além de reduzir a dependência de combustíveis fósseis, a energia eólica tem sido um exemplo de inovação sustentável, como na Dinamarca, onde mais de 40% da eletricidade do país é gerada a partir do vento."} />

                <Card
                    titulo={"Energia Hidrelétrica 💧"}
                    texto={"A energia hidrelétrica aproveita o movimento da água, geralmente de rios e barragens, para gerar eletricidade. Esta é uma das fontes mais confiáveis e eficientes de energia renovável, especialmente em países como o Brasil, onde cerca de 60% da matriz energética é composta por energia hidrelétrica. Além de fornecer energia, as barragens podem ajudar no controle de enchentes e na irrigação agrícola, mostrando o impacto positivo dessa tecnologia."} />

                <Card
                    titulo={"Energia Geotérmica 🌋"}
                    texto={"A energia geotérmica utiliza o calor natural do interior da Terra para gerar eletricidade. Captada de reservatórios subterrâneos, essa fonte de energia é extremamente eficiente e está disponível o tempo todo, independentemente do clima. Ideal para regiões com alta atividade geotérmica, como a Islândia, onde quase 30% da energia gerada vem dessa fonte, ela também tem um impacto ambiental reduzido, tornando-se uma opção sustentável e confiável."} />

                <Card
                    titulo={"Energia de Biomassa 🌱"}
                    texto={"A biomassa transforma materiais orgânicos, como resíduos agrícolas, restos de alimentos e madeira, em energia. Essa fonte é inovadora porque ajuda a reduzir o desperdício e as emissões de metano provenientes de aterros sanitários. Além de ser renovável e econômica, a biomassa é utilizada em diversas partes do mundo para produzir biocombustíveis e energia elétrica. É uma maneira eficaz de transformar resíduos em uma solução para o futuro sustentável."} />
            </div>
        </section>
    );
}

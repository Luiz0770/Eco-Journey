import { Link } from 'react-router-dom';
import imgLandscape from '../assets/landscape.png'

export default function Solution() {
    return (
        <section id="solution" className="my-56">
            <div className="py-10 px-5 text-white grid bg-darkestgreen grid-cols-1 md:grid-cols-2 items-center">
                <div id="about-image">
                    <img src={imgLandscape} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
                </div>
                {/* Infos */}
                <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-16 md:px-20">
                    <div id='about-text' className='flex flex-col gap-6 text-lightgreen'>
                        <h2 className='text-5xl font-bold text-white'>Eco Journey</h2>
                        <h3 className='font-semibold text-xl md:text-lg leading-7'>
                            O EcoJourney utiliza tecnologia para transformar ações sustentáveis em impacto real. Por meio de missões diárias, como economizar energia ou usar transporte limpo, os usuários acumulam pontos, participam de rankings e desbloqueiam recompensas. Essa abordagem gamificada incentiva práticas ecológicas e torna a sustentabilidade uma experiência engajante e acessível.
                        </h3>
                        <p className='leading-6 text-lg'>
                            Além disso, o app oferece análises personalizadas, sugerindo formas de reduzir o consumo de energia e diminuir emissões de carbono com base nos hábitos registrados. Através de comunidades interativas, o EcoJourney conecta pessoas para trocar dicas e soluções, fortalecendo o engajamento coletivo em prol do meio ambiente.
                        </p>
                        <h3 className='font-semibold text-slate-400-400 text-md'>
                            Combinando inovação e conscientização, o EcoJourney torna a sustentabilidade prática e tangível, ajudando a enfrentar a crise energética de forma colaborativa e eficaz.
                        </h3>
                    </div>
                    <Link to={'/login'} className='bg-green-800 py-3 px-5 rounded-xl w-full md:w-auto'>Venha ser da Eco-Journey!</Link>
                </div>
            </div>
        </section>
    );
}

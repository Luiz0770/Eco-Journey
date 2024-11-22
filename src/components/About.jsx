import imgFloresta from '../assets/floresta-redondo.png'

export default function About() {
    return (
        <section id="about">
            <div className="relative py-10 px-5 text-white bg-heroText grid grid-cols-1 md:grid-cols-2 items-center">
                <div id="about-image">
                    <img src={imgFloresta} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
                </div>
                <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-10 md:px-20">
                    <div id='about-text' className='flex flex-col gap-8'>
                        <h2 className='text-5xl font-bold'>O Desafio da Crise Energética</h2>
                        <h3 className='font-medium text-xl md:text-lg leading-7'>
                            A crise energética é um dos maiores desafios globais, marcada pelo esgotamento de combustíveis fósseis, altos níveis de poluição e agravamento das mudanças climáticas. Décadas de exploração intensiva de recursos não renováveis e o aumento da demanda global por energia têm pressionado ainda mais o sistema, enquanto a transição para fontes renováveis ocorre de forma lenta.
                        </h3>
                        <h3 className='font-medium text-xl md:text-lg leading-7'>
                            As consequências são graves: aquecimento global, eventos climáticos extremos, perda de biodiversidade e impactos na saúde humana e ambiental. Repensar a forma como produzimos e consumimos energia é essencial para garantir um futuro sustentável.
                        </h3>
                    </div>
                    <div className='flex flex-col'>
                        <a href='#solution' className='max-w-max bg-green-800 py-3 px-5 rounded-xl w-full md:w-auto mb-5 active:scale-105 duration-200'>Comece sua Jornada Sustentavel!</a>
                        <h3 className='font-semibold text-slate-400-400 text-md'>
                            É hora de agir. Precisamos de soluções práticas para mitigar esses impactos e construir um futuro mais sustentável.
                        </h3>
                    </div>
                </div>
            </div>
            <svg
                className='mt-[-90px]'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#017880" fillOpacity="1" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,90.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </section>);
}
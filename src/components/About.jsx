import imgFloresta from '../assets/floresta-redondo.png'

export default function About() {
    return (
        <section id="about">
            <div className="relative py-10 px-5 text-white bg-heroText grid grid-cols-1 md:grid-cols-2 items-center">
                <div id="about-image">
                    <img src={imgFloresta} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
                </div>
                <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-20 md:px-20">
                    <div id='about-text' className='flex flex-col gap-8'>
                        <h2 className='text-5xl font-bold'>Eco Journey</h2>
                        <h3 className='font-medium text-xl md:text-lg leading-7'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita perspiciatis nesciunt beatae eius ab ducimus maiores? Minus ad dolores dolorem impedit atque modi voluptatem pariatur expedita. Eligendi optio dicta harum?
                        </h3>
                    </div>
                    <button className='bg-green-800 py-3 px-5 rounded-xl w-full md:w-auto'>Start Your Sustainability Journey</button>
                </div>
            </div>
            <svg
                className='mt-[-90px]'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#017880" fillOpacity="1" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,90.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </section>);
}
import imgArvore from '../assets/treeVector.png'
import imgEarth from '../assets/earth.png'

export default function CardHome() {
    return (
        <section id="cardHome" className='mt-24 md:mt-4'>
            <div id="cardHome-texts" className="flex flex-col text-center justify-center items-center gap-5 px-5">
                <h2 className="text-5xl text-green-800 font-semibold">Empowering Eco-Warriors</h2>
                <h4 className="md:w-3/6 text-[#808C83] font-semibold text-lg md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum porro possimus labore, maxime doloremque voluptas excepturi libero saepe assumenda cumque expedita. Mollitia ad, id recusandae doloribus qui fugiat maxime.</h4>
            </div>

            {/* Cards */}
            <div id="cardHome-card" className='my-20 grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto md:mx-0 min-h-[90vh] md:shadow-lg gap-4 md:gap-0'>
                {/* Card Info */}
                <div id="card-info" className='py-10 md:py-5 px-5 md:px-20 bg-green-800 text-white rounded-3xl md:rounded-e-2xl flex flex-col justify-center items-start gap-10'>
                    <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl font-semibold'>Sustainable Rewards</h3>
                        <p className='leading-7 text-lg font-semibold md:font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto incidunt sunt nulla voluptates impedit nemo repellat nam voluptatem. Maxime fugiat repellat aspernatur tenetur atque similique est animi, nulla dicta vitae.</p>
                    </div>
                    <button className='p-4 md:py-5 md:px-10 bg-yellow-500 rounded-full text-green-800 font-semibold hover:scale-105 transition text-lg md:text-xl w-full'>Claim Your Eco-Rewards</button>
                </div>
                {/* Card Imagem */}
                <div id="card-image" className='bg-neutral-300 rounded-3xl md:rounded-e-2xl flex items-center '>
                    <img src={imgArvore} alt="Imagem de uma arvore" className='w-4/5 mx-auto' />
                </div>
            </div>
        </section>
    );
}

import imgEarth from '../../assets/earth.png'

export default function Card({ titulo, texto }) {
    return (
        <>
            {/* Cards */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-green-800 rounded-3xl  md:rounded-e-2xl'>
                {/* Card Info */}
                <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                    <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl font-semibold'>{titulo}</h3>
                        <p className='leading-7 text-lg font-semibold md:font-normal'>{texto}</p>
                    </div>
                    <a href='#solution' className=' text-center p-4 md:py-5 md:px-10 bg-yellow-500 rounded-full text-green-800 font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
                </div>
                {/* Card Imagem */}
                {/* <div id="card-image" className='bg-neutral-300 rounded-3xl md:rounded-e-2xl flex items-center '>
                    <img src={imgArvore} alt="Imagem de uma arvore" className='w-4/5 mx-auto' />
                </div> */}
            </div>
        </>
    );
}
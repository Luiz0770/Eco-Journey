import imgLandscape from '../assets/landscape.png'

export default function Solution() {
    return (
        <section id="solution" className="my-20">
            <div className="py-10 px-5 text-white grid bg-[#e4dcc4] grid-cols-1 md:grid-cols-2 items-center">
                <div id="about-image">
                    <img src={imgLandscape} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
                </div>
                {/* Infos */}
                <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-20 md:px-20">
                    <div id='about-text' className='flex flex-col gap-6 text-lightgreen'>
                        <h2 className='text-5xl font-bold text-green-800'>Cultivate an</h2>
                        <h3 className='font-semibold text-xl md:text-lg leading-7'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita perspiciatis nesciunt beatae eius ab ducimus maiores? Minus ad dolores dolorem impedit atque modi voluptatem pariatur expedita. Eligendi optio dicta harum?
                        </h3>
                        <p className='leading-6 text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laborum doloribus nulla, non veritatis nostrum ut obcaecati soluta, eius quam animi, minima voluptas officia quisquam neque magni blanditiis eveniet dignissimos.
                        </p>
                    </div>
                    <button className='bg-green-800 py-3 px-5 rounded-xl w-full md:w-auto'>Start Your Eco-Journey</button>
                </div>
            </div>
        </section>
    );
}

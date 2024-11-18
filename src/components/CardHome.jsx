
import Card from './UI/Card';

export default function CardHome() {
    return (
        <section id="cardHome" className='my-24 md:my-4 min-h-screen'>
            <div id="cardHome-texts" className="flex flex-col text-center justify-center items-center gap-5 px-5">
                <h2 className="text-5xl text-green-800 font-semibold">Empowering Eco-Warriors</h2>
                <h4 className="md:w-3/6 text-[#808C83] font-semibold text-lg md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum porro possimus labore, maxime doloremque voluptas excepturi libero saepe assumenda cumque expedita. Mollitia ad, id recusandae doloribus qui fugiat maxime.</h4>
            </div>
            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-center items-center px-5'>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

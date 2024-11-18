import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bird1 from "../assets/images/bird1.png";
import bird2 from "../assets/images/bird2.png";
import forest from "../assets/images/forest.png";
import rocks from "../assets/images/rocks.png";
import water from "../assets/images/water.png";

export default function Parallax() {
    const textRef = useRef(null);
    const bird1Ref = useRef(null);
    const bird2Ref = useRef(null);
    const btnRef = useRef(null);
    const rocksRef = useRef(null);
    const forestRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;

            if (textRef.current) textRef.current.style.top = 35 + value * 0.25 + "%";
            if (btnRef.current) btnRef.current.style.marginTop = value * 1.5 + "px";
            if (rocksRef.current) rocksRef.current.style.top = value * -0.12 + "px";
            if (forestRef.current) forestRef.current.style.top = value * -0.1 + "px";
            if (bird1Ref.current) {
                bird1Ref.current.style.top = value * -1 + "px";
                bird1Ref.current.style.left = value * 1.5 + "px";
            }
            if (bird2Ref.current) {
                bird2Ref.current.style.top = value * -1 + "px";
                bird2Ref.current.style.right = value * 4 + "px";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section
                id="hero"
                className="relative w-full h-screen flex justify-center items-center overflow-hidden hero-before">
                <h2
                    id="text"
                    ref={textRef}
                    className="absolute text-[25vw] md:text-[10vw] text-center leading-[0.55em] text-[#094b65] font-ranch transform translate-y-[-90%]"
                >
                    <span className="text-2xl md:text-3xl tracking-wider font-poppins font-light">
                        It`s time for a new
                    </span>
                    <br />
                    Adventure
                </h2>
                <img src={bird1} id="bird1" ref={bird1Ref} className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
                <img src={bird2} id="bird2" ref={bird2Ref} className="absolute top-0 right-0 w-full h-full object-cover pointer-events-none" />
                <img src={forest} id="forest" ref={forestRef} className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
                <Link
                    id="btn"
                    to="/"
                    ref={btnRef}
                    className="inline-block px-8 py-3 bg-white text-heroText text-xl font-medium tracking-wider rounded-full transform translate-y-[100px] no-underline"
                >
                    Explore
                </Link>
                <img src={rocks} id="rocks" ref={rocksRef} className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
                <img src={water} id="water" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
            </section>
        </>
    );
}

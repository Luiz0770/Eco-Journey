import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Hero.css';

// Import imagesn parallax
import bird1 from "../assets/images/bird1.png";
import bird2 from "../assets/images/bird2.png";
import forest from "../assets/images/forest.png";
import rocks from "../assets/images/rocks.png";
import water from "../assets/images/water.png";


export default function Hero() {
    const textRef = useRef(null);
    const bird1Ref = useRef(null);
    const bird2Ref = useRef(null);
    const btnRef = useRef(null);
    const rocksRef = useRef(null);
    const forestRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;

            // Aplicando Efeito nas Imagens
            if (textRef.current) textRef.current.style.top = 50 + value * -0.25 + "%";
            if (btnRef.current) btnRef.current.style.marginTop = value * 1.5 + "px";
            if (rocksRef.current) rocksRef.current.style.top = value * -0.12 + "px";
            if (forestRef.current) forestRef.current.style.top = value * -0.2 + "px";
            if (bird1Ref.current) {
                bird1Ref.current.style.top = value * -1 + "px";
                bird1Ref.current.style.left = value * 1.5 + "px";
            }
            if (bird2Ref.current) {
                bird2Ref.current.style.top = value * -1 + "px";
                bird2Ref.current.style.right = value * 4 + "px";
            }
        };

        // Adiciona o evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Remove o evento ao desmontar o componente
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section id="hero">
                <h2 id="text" ref={textRef}><span>It`s time for a new</span><br />Adventure</h2>
                <img src={bird1} id="bird1" ref={bird1Ref} />
                <img src={bird2} id="bird2" ref={bird2Ref} />
                <img src={forest} id="forest" ref={forestRef} />
                <Link id="btn" to="/" ref={btnRef}>Explore</Link>
                <img src={rocks} id="rocks" ref={rocksRef} />
                <img src={water} id="water" />
            </section>
            <div className="sec">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit hic enim...</p>
            </div>
        </>
    );
}

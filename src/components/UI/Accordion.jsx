import { useState, useRef } from "react";
import { FaAngleDown, FaRegClipboard } from "react-icons/fa";

export default function Accordion({ titulo, children }) {

    const [isOpended, setIsOpened] = useState(null);
    const conteudoRef = useRef(null);

    const aoClickar = (id) => {
        setIsOpened((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <div>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border rounded-xl focus:ring-0 focus:outline-none hover:bg-gray-100 gap-3 ${isOpended == 1 ? "bg-gray-50" : "bg-white"}`}
                    onClick={() => aoClickar(1)}
                    aria-expanded={isOpended === 1}
                >
                    <div className="flex items-center">
                        <FaRegClipboard className="w-5 h-5 me-2 shrink-0" />
                        {titulo}
                    </div>
                    <FaAngleDown className={`w-3 h-3 transform transition-transform duration-300 ${isOpended === 1 ? "rotate-180" : ""}`}/>
                </button>

                {/* Conteudo de Dentro */}
                <div
                    ref={conteudoRef}
                    style={{
                        height: isOpended === 1 ? `${conteudoRef.current.scrollHeight}px` : "0px",
                    }}
                    className={`overflow-hidden transition-all duration-500`}
                >
                    <div className="p-5 border border-b-0 border-gray-200 grid grid-cols-1 sm:grid-cols-2 mdgrid-cols-3 lg:grid-cols-4 gap-5 items-stretch justify-center rounded-xl ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

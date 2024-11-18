import { useState } from "react";
import { FaAngleDown, FaRegClipboard } from "react-icons/fa"; // Importe os ícones desejados

export default function Accordion({titulo, children}) {

    const [isOpended, setIsOpened] = useState(null);

    const aoClickar = (id) => {
        setIsOpened((prev) => (prev === id ? null : id));
    };

    return ( 
        <>
            <div id="accordion-open">
                <h2 id="accordion-open-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                        onClick={() => aoClickar(1)}
                        aria-expanded={isOpended === 1}
                        aria-controls="accordion-open-body-1"
                    >
                        <span className="flex items-center">
                            <FaRegClipboard className="w-5 h-5 me-2 shrink-0" />
                            {titulo}
                        </span>
                        <FaAngleDown
                            className={`w-3 h-3 transform ${isOpended === null ? "rotate-180" : ""}`}
                            aria-hidden="true"
                        />
                    </button>
                </h2>

                {isOpended === 1 && (
                    children
                )}
            </div>
        </>
     );
}

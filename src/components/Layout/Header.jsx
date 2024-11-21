import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gradient">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="text-2xl font-semibold">Eco Journey</Link>

                <MdOutlineMenu
                    className="p-2 w-10 h-10 rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                />

                <div
                    className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out overflow-hidden 
                        ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:opacity-100 md:max-h-screen`}
                    id="navbar-default"
                >
                    <ul className="font-medium  text-lg flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:gap-x-8 md:mt-0 md:border-0">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mission" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Missões</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ranking" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Ranking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Contato</NavLink>
                        </li>
                        {isLogged && (
                            <li>
                                <NavLink to="/config" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Configuração</NavLink>
                            </li>
                        )}
                        <li>
                            <Link to={"/login"} className="block py-2 px-3 rounded-lg bg-darkgreen text-white hover:bg-green-700 duration-200">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
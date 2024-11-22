import { MdMailOutline, MdOutlineMap, MdOutlineLocalPhone } from "react-icons/md";
import Header from "../components/Layout/Header";

export default function Contato() {
    return (
        <>
            <Header/>
            <div className="relative w-full flex items-center justify-center py-8 min-h-[90vh]">
                <div className="relative grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
                    {/* Seção de Informações de Contato */}
                    <div className="p-8 md:block hidden">
                        <h3 className="text-2xl font-semibold mb-4">
                            Entre em contato conosco
                        </h3>
                        <p className="mb-6">
                            Estamos aqui para ajudar! Entre em contato para dúvidas, sugestões ou suporte.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MdOutlineMap className="w-6 h-6 mr-3" />
                                <p>Rua Exemplo, 123, São Paulo, SP</p>
                            </div>
                            <div className="flex items-center">
                                <MdMailOutline className="w-6 h-6 mr-3" />
                                <p>contato@exemplo.com</p>
                            </div>
                            <div className="flex items-center">
                                <MdOutlineLocalPhone className="w-6 h-6 mr-3" />
                                <p>(11) 98765-4321</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="mb-3">Siga-nos nas redes sociais:</p>
                            <div className="flex space-x-4">
                                <i className="fab fa-facebook-f w-8 h-8 text-[#165D31] rounded-full flex items-center justify-center hover:bg-gray-200 transition"></i>
                                <i className="w-8 h-8 text-[#165D31] rounded-full flex items-center justify-center hover:bg-gray-200 transition fab fa-twitter"></i>
                                <i className="w-8 h-8 text-[#165D31] rounded-full flex items-center justify-center hover:bg-gray-200 transition fab fa-instagram"></i>
                                <i className="w-8 h-8 text-[#165D31] rounded-full flex items-center justify-center hover:bg-gray-200 transition fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>

                    {/* Seção do Formulário */}
                    <div className="relative bg-[#073418] p-8 text-white">
                        <div className="absolute w-[130px] h-[130px] bg-gradient-to-br from-transparent to-[#165D31] rounded-full top-[130px] right-[-40px]"></div>
                        <div className="absolute w-[80px] h-[80px] bg-gradient-to-br from-transparent to-[#165D31] rounded-full top-2 right-[30px]"></div>
                        <form className="relative z-10">
                            <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                            <div className="mb-4">
                                <label className="block mb-2">Nome</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#165D31]"
                                    placeholder="Digite seu nome"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">E-mail</label>
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#165D31]"
                                    placeholder="Digite seu e-mail"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#165D31]"
                                    placeholder="Digite seu telefone"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2">Mensagem</label>
                                <textarea
                                    className="w-full p-3 rounded-xl border-2 border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#165D31]"
                                    placeholder="Escreva sua mensagem"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#165D31] text-white px-6 py-3 rounded-full hover:bg-[#0e4b25] transition duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

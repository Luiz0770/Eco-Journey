import { MdMailOutline, MdOutlineMap, MdOutlineLocalPhone } from "react-icons/md";
import shape from '../assets/shape.png'
export default function Contato() {
    return (
        <>
            <div className="relative w-full min-h-[95vh] flex items-center justify-center p-8">
                <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Contact Info Section */}
                    <div className="p-8">
                        <h3 className="text-teal-500 text-2xl font-semibold mb-4">
                            Let's get in touch
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-600">
                                <MdOutlineMap className="w-6 mr-3" />
                                <p>92 Cherry Drive Uniondale, NY 11553</p>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <MdMailOutline className="w-6 mr-3" />
                                <p>lorem@ipsum.com</p>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <MdOutlineLocalPhone className="w-6 mr-3" />
                                <p>123-456-789</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-700 mb-3">Connect with us :</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full text-white flex items-center justify-center">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full text-white flex items-center justify-center">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full text-white flex items-center justify-center">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full text-white flex items-center justify-center">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="relative bg-teal-500 p-8">
                        <div className="absolute w-[130px] h-[130px] bg-gradient-to-br from-transparent to-teal-700 rounded-full top-[130px] right-[-40px]"></div>
                        <div className="absolute w-[80px] h-[80px] bg-gradient-to-br from-transparent to-teal-700 rounded-full top-2 right-[30px]"></div>
                        <form className="relative z-10">
                            <h3 className="text-white text-2xl font-semibold mb-6">Contact us</h3>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Username</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-full border-2 border-gray-100 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-full border-2 border-gray-100 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full p-3 rounded-full border-2 border-gray-100 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-white mb-2">Message</label>
                                <textarea
                                    className="w-full p-3 rounded-xl border-2 border-gray-100 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    placeholder="Write your message"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-white text-teal-500 px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

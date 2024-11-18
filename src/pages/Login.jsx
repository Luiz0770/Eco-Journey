import React, { useState, useRef } from "react";

// Import Images
import imgLogin from '../assets/bgLogin.svg'
import imgAvatar from '../assets/avatar.svg'
import wave from '../assets/wave.png'


export default function Login() {

    const usernameRef = useRef(null);
    const senhaRef = useRef(null);
    const [usernameIsFocused, setUsernameIsFocused] = useState(false);
    const [senhaIsFocused, setSenhaIsFocused] = useState(false);

    const isFocus = (setFocusState) => {
        setFocusState(true);
    };

    const isBlur = (setFocusState, inputRef) => {
        if (inputRef.current.value === "") setFocusState(false);
    };

    return (
        <div className="relative w-screen h-screen font-poppins overflow-hidden">
            {/* Wave */}
            <img className="absolute bottom-0 left-0 h-full z-[-1] hidden md:block" src={wave} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8 h-full">
                <div className="hidden md:flex justify-end items-center">
                    <img src={imgLogin} alt="Background" className="w-[500px]" />
                </div>
                {/* Login */}
                <div className="flex justify-center items-center">
                    <form className="w-[360px]">
                        <div className="flex justify-center">
                            <img src={imgAvatar} alt="Avatar" className="h-[100px]" />
                        </div>
                        <h2 className="text-3xl text-center text-gray-800 mt-4 mb-6">Bem-Vindo!</h2>
                        <div className={`relative flex items-center gap-4 border-b-2 ${usernameIsFocused ? "border-green-400" : "border-gray-300"} mb-6`}>
                            <i className={`fas fa-user ${usernameIsFocused ? "text-green-400" : "text-gray-400"}`}></i>
                            <div className="flex-grow relative">
                                <label
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 ${usernameIsFocused || usernameRef.current?.value
                                        ? "top-[-5px] text-sm"
                                        : "text-lg"
                                        } text-gray-500 transition-all duration-300`}
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    ref={usernameRef}
                                    id="username"
                                    type="text"
                                    className="w-full border-none outline-none text-gray-700 text-lg p-2"
                                    onFocus={() => isFocus(setUsernameIsFocused)}
                                    onBlur={() =>
                                        isBlur(setUsernameIsFocused, usernameRef)
                                    }
                                />
                            </div>
                        </div>

                        <div className={`relative flex items-center gap-4 border-b-2 ${senhaIsFocused ? "border-green-400" : "border-gray-300"} mb-4`}>
                            <i className={`fas fa-lock ${senhaIsFocused ? "text-green-400" : "text-gray-400"}`}></i>
                            <div className="flex-grow relative">
                                <label
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 ${senhaIsFocused || senhaRef.current?.value
                                        ? "top-[-5px] text-sm"
                                        : "text-lg"
                                        } text-gray-500 transition-all duration-300`}
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    ref={senhaRef}
                                    id="password"
                                    type="password"
                                    className="w-full bg-transparent border-none outline-none text-gray-700 text-lg p-2"
                                    onFocus={() => isFocus(setSenhaIsFocused)}
                                    onBlur={() =>
                                        isBlur(setSenhaIsFocused, senhaRef)
                                    }
                                />
                            </div>
                        </div>
                        <a href="#" className="block text-right text-gray-500 text-sm hover:text-green-400 transition">
                            Esqueceu a senha?
                        </a>
                        <button type="submit" className="w-full bg-green-400 hover:from-green-500 hover:to-green-400 text-white py-3 rounded-full mt-4 text-lg transition">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


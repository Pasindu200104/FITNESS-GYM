import React from "react";
import '../index.css'
import logo from '../assets/icons/logo.png'

const Header = () => {
    return (
        <header className="bg-cuswhite text-cusblack min-w-full fixed top-0 left-0 z-50 shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* left start: logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="font-bold text-lg">FITNESS</span>
                </div>

                {/* center: navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-bold">
                    <a href="#home" className="transition hover:text-cusyellow">Home</a>
                    <a href="#about" className="transition hover:text-cusyellow">About</a>
                    <a href="#services" className="transition hover:text-cusyellow">Service</a>
                    <a href="#payments" className="transition hover:text-cusyellow">Payment</a>
                    <a href="#trainers" className="transition hover:text-cusyellow">Trainers</a>
                    <a href="#contact" className="transition hover:text-cusyellow">Contact</a>
                </nav>

                {/* right end: contact button */}
                <div>
                    <a href="#contact" className="rounded-xl bg-cusyellow px-5 py-2 font-bold text-slate-800 shadow transition hover:brightness-95">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Mobile nav links */}
            <div className="flex flex-wrap justify-center gap-4 bg-slate-600 px-4 py-2 md:hidden">
                <a href="#home" className="text-sm font-medium text-white hover:text-cyan-300">Home</a>
                <a href="#about" className="text-sm font-medium text-white hover:text-cyan-300">About</a>
                <a href="#services" className="text-sm font-medium text-white hover:text-cyan-300">Service</a>
                <a href="#payments" className="text-sm font-medium text-white hover:text-cyan-300">Payment</a>
                <a href="#trainers" className="text-sm font-medium text-white hover:text-cyan-300">Trainers</a>
                <a href="#contact" className="text-sm font-medium text-white hover:text-cyan-300">Contact</a>
            </div>
        </header>
    );
};

export default Header;
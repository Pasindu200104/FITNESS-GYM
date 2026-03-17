import React from "react";
import Header from "../components/Header";
import bghero from "../assets/other/bghero.jpeg";
import bgman from "../assets/other/bgman.png";
import DetailCard from "../components/DetailCard";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="w-full">

        {/* hero section */}
        <div className="relative w-full min-h-[90vh] overflow-hidden bg-cuswhite">
          <div className="absolute inset-0">
            <img
              src={bghero}
              alt="hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cusblack via-cusblack/80 to-transparent"></div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-6 p-4 md:flex-row md:items-center md:p-8">
            
            {/* left side text & buttons*/}
            <div className="w-full md:w-1/2 text-left md:text-left">
              <h1 className="text-3xl font-bold uppercase leading-tight text-cuswhite md:text-5xl">
                Transform
                <span className="text-cusyellow">
                  {" "}
                  Your <br /> Body{" "}
                </span>
                With Us
              </h1>
              <p className="mt-4 text-sm text-cuswhite md:text-base">
                Achieve your fitness goals with professional trainers, modern
                equipment and motivating environment.
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 md:flex-row md:justify-start">
                <button className="rounded-xl bg-cusyellow px-5 py-2 font-bold text-cuswhite transition hover:brightness-95">
                  Contact Us
                </button>
                <button className="rounded-xl border border-cusyellow px-5 py-2 font-bold text-cusyellow transition hover:bg-cusyellow hover:text-cuswhite">
                  Service's
                </button>
              </div>
            </div>

            {/* right side image */}
            <div className="hidden md:block">
              <img
                src={bgman}
                alt="hero person"
                className="absolute bottom-0 right-0 h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* details section */}
        <DetailCard />
      </div>
    </>
  );
};

export default HomePage;

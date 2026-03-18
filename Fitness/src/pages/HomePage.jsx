import React from "react";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";
import ServiceCard from "../components/ServiceCard";
import PaymentCard from "../components/PaymentCard";
import TrainerCard from "../components/TrainerCard";

import bghero from "../assets/other/bghero.jpeg";
import bgman from "../assets/other/bgman.png";
import bggirl from "../assets/other/gymgirl.png";
import diat from "../assets/services/diat.png";
import fit from "../assets/services/fit.png";
import strength from "../assets/services/strength.png";
import yoga from "../assets/services/yoga.png";
import bgserv from "../assets/other/bgser.jpeg";
import bgtrain from "../assets/other/bgtrain.jpeg";
import m1 from "../assets/trainers/m1.png";
import m2 from "../assets/trainers/m2.png";
import m3 from "../assets/trainers/m3.png";
import w1 from "../assets/trainers/w1.png";
import w2 from "../assets/trainers/w2.png";


const HomePage = () => {
  const cardData = [
    { number: "10+", text: "Professional Trainers" },
    { number: "50+", text: "Training Programs" },
    { number: "1000+", text: "Active Members" },
    { number: "5+", text: "Years Experience" },
  ];

  const trainerData = [
    { image: m1, name: "Alex Carter", role: "Head Strength & Conditioning Coach" },
    { image: m2, name: "Ryan Mitchell", role: "Certified Personal Fitness Trainer" },
    { image: m3, name: "Daniel Brooks", role: "Weight Training Specialist" },
    { image: w1, name: "Sophia Martinez", role: "Yoga & Flexibility Instructor" },
    { image: w2, name: "Emma Walker", role: "Nutrition & Wellness Coach" },
  ];

  const services = [
    {
      image: fit,
      title: "Personal Fitness Training",
      description:
        "Get one-on-one guidance from certified personal trainers who create customized workout plans based on your fitness level and goals. Our trainers focus on technique, motivation, and progress tracking to ensure you achieve the best results.",
    },
    {
      image: diat,
      title: "Diet & Nutrition Plans",
      description:
        "Fitness starts in the kitchen. Our nutrition experts design personalized diet plans that support your workouts, improve energy levels, and help you build a healthier relationship with food.",
    },
    {
      image: strength,
      title: "Strength & Weight Training",
      description:
        "Build strength, increase muscle mass, and improve endurance with our professional strength training programs. We provide modern equipment and expert guidance to help you train safely and effectively.",
    },
    {
      image: yoga,
      title: "Yoga & Flexibility Training",
      description:
        "Improve flexibility, reduce stress, and enhance overall well-being through guided yoga sessions. Our classes are suitable for all experience levels and help create balance between mind and body.",
    },
  ];

  const allFeatures = [
  "Full gym equipment access",
  "Access to group fitness classes",
  "Free fitness assessment",
  "Locker room access",
  "Personalized workout guidance",
  "Nutrition consultation",
  "Priority class booking",
];

  const paymentPlans = [
    {
      title: "Individual",
      price: "29",
      interval: "/mo",
      description: "Perfect for individuals who want full access to our gym facilities",
      availability: [true, true, true, true, false, false, false],
    },
    {
      title: "Couples",
      price: "49",
      interval: "/mo",
      description: "Designed for couples who want to stay motivated and achieve their fitness goals together",
      availability: [true, true, true, true, true, false, false],
    },
    {
      title: "FAMILY",
      price: "69",
      interval: "/mo",
      description: "The perfect option for families who want to maintain a healthy and active lifestyle together",
       availability: [true, true, true, true, true, true, true],
    },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto mt-20 gap-4">
          {cardData.map((card, index) => (
            <DetailCard key={index} number={card.number} text={card.text} />
          ))}
        </div>

        {/* About Section */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center md:flex-row md:items-center md:justify-center">
          {/* left side text */}
          <div className="w-full md:w-1/2 px-4 md:px-6 text-left md:text-left">
            <span className="text-cusblack">About Our Gym</span>
            <h2 className="text-1xl font-bold uppercase leading-tight text-cusblack md:text-3xl">
              Your Journey to a
              <span className="text-cusyellow">
                {" "}
                Healthier <br /> Lifestyle{" "}
              </span>
              Starts Here
            </h2>
            <p className="mt-10 text-sm md:text-base">
              Our gym is dedicated to helping individuals achieve their fitness
              goals through professional guidance, modern facilities, and a
              supportive community. Whether you are just starting your fitness
              journey or looking to push your limits, our expert trainers and
              high-quality equipment provide everything you need to succeed.{" "}
              <br />
              <br />
              We believe that fitness is not just about exercise it's about
              building confidence, discipline, and a healthier lifestyle. With
              personalized training programs, diverse workout options, and a
              motivating environment, we help our members become the best
              version of themselves.
            </p>
          </div>

          {/* right side image */}
          <div className="w-full md:w-1/2 px-4 md:px-6 flex justify-center md:justify-end">
            <img
              src={bggirl}
              alt="hero girl"
              className="h-[65vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Service Section  */}
        <div className="relative py-16 px-4" style={{ backgroundImage: `url(${bgserv})` }}>

          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cuswhite text-sm font-semibold uppercase tracking-widest mb-2">
                Our Fitness Services
              </p>
              <h2 className="text-cuswhite text-4xl md:text-5xl font-bold leading-tight">
                Everything You <span className="text-cusyellow">Need</span> to
                Reach
                <br /> Your <span className="text-cusyellow">Fitness</span>{" "}
                Goals
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-content">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Payments Section  */}
        <div className="relative py-16 px-4">
          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cusblack text-sm font-semibold uppercase tracking-widest mb-2">
                Our Prices
              </p>
              <h2 className="text-cusblack text-4xl md:text-5xl font-bold leading-tight">
                Choose a <span className="text-cusyellow">Plan</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-content">
              {paymentPlans.map((plan, index) => (
                <PaymentCard key={index} {...plan} allFeatures={allFeatures} />
              ))}
            </div>
          </div>
        </div>

        {/* Trainers Section  */}
        <div className="relative py-16 px-4" style={{ backgroundImage: `url(${bgtrain})` }}>

          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cuswhite text-sm font-semibold uppercase tracking-widest mb-2">
                Meet Our Expert Trainers
              </p>
              <h2 className="text-cuswhite text-4xl md:text-5xl font-bold leading-tight">
                Train with <span className="text-cusyellow">professionals</span> who are <span className="text-cusyellow">passionate</span> about 
                <br /> helping you <span className="text-cusyellow">succeed</span>{" "}
                Goals
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-content">
              {trainerData.map((trainer, index) => (
                <TrainerCard key={index} {...trainer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

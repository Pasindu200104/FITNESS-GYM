import React from "react";
import Header from "../components/Header.jsx";
import DetailCard from "../components/DetailCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import PaymentCard from "../components/PaymentCard.jsx";
import TrainerCard from "../components/TrainerCard.jsx";
import Footer from "../components/Footer.jsx";

import bghero from "../assets/other/bghero.jpeg";
import bgmain from "../assets/bgimages/bgwhite01.png";
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
import home from "../assets/icons/home.png";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/mail.png";
import useFadeIn from "../hooks/useFadeIn.js";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const cardData = [
    { number: "10+", text: "Professional Trainers" },
    { number: "50+", text: "Training Programs" },
    { number: "1000+", text: "Active Members" },
    { number: "5+", text: "Years Experience" },
  ];

  const trainerData = [
    {
      image: m1,
      name: "Alex Carter",
      role: "Head Strength & Conditioning Coach",
    },
    {
      image: m2,
      name: "Ryan Mitchell",
      role: "Certified Personal Fitness Trainer",
    },
    { image: m3, name: "Daniel Brooks", role: "Weight Training Specialist" },
    {
      image: w1,
      name: "Sophia Martinez",
      role: "Yoga & Flexibility Instructor",
    },
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
      description:
        "Perfect for individuals who want full access to our gym facilities",
      availability: [true, true, true, true, false, false, false],
    },
    {
      title: "Couples",
      price: "49",
      interval: "/mo",
      description:
        "Designed for couples who want to stay motivated and achieve their fitness goals together",
      availability: [true, true, true, true, true, false, false],
    },
    {
      title: "FAMILY",
      price: "69",
      interval: "/mo",
      description:
        "The perfect option for families who want to maintain a healthy and active lifestyle together",
      availability: [true, true, true, true, true, true, true],
    },
  ];

  const details = useFadeIn();
  const about = useFadeIn();
  const servicesSection = useFadeIn();
  const paymentsSection = useFadeIn();
  const trainersSection = useFadeIn();
  const contactSection = useFadeIn();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name) {
      toast.error("Name is required");
      console.log("ok");
      return;
    }else if (!email) {
      toast.error("Email is required");
      return;
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      toast.error("Please enter a valid email address");
      return;
    }else if (!message) {
      toast.error("Message is required");
      return;
    }else{
      toast.success("Message sent successfully");
    }


    console.log("Submited", { name, email, message });
  };

  return (
    <>
      <Header />
       <Toaster position="top-center"/>
      <div className="w-full min-h-screen bg-cover bg-fixed bg-cuswhite text-cusgray overflow-hidden" style={{backgroundImage: `url(${bgmain})`,}}>
        {/* hero section */}
        <div id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-cuswhite">
          <div className="absolute inset-0">
            <img
              src={bghero}
              alt="hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cusblack via-cusblack/80 to-transparent"></div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-6 p-4 md:flex-row md:items-center md:justify-start md:p-8">
            {/* left side text & buttons*/}
            <div className="w-full text-center lg:w-1/2 lg:text-left">
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

              <div className="mt-6 flex flex-row justify-center gap-3 lg:justify-start">
                <a href="#contact" className="rounded-xl w-4/12 md:w-5/12 lg:w-4/12 text-center bg-cusyellow px-5 py-2 font-bold text-cuswhite transition hover:brightness-95">
                  Contact Us
                </a>
                <a href="#services" className="rounded-xl w-4/12 md:w-5/12 lg:w-4/12 text-center border border-cusyellow px-5 py-2 font-bold text-cusyellow transition hover:bg-cusyellow hover:text-cuswhite">
                  Service's
                </a>
              </div>
            </div>

            {/* right side image */}
            <div className="hidden lg:block">
              <img
                src={bgman}
                alt="hero person"
                className="absolute bottom-0 right-0 h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* details section */}
        <div 
          ref={details.elementRef}
          style={{
            opacity: details.isVisible ? 1 : 0,
            transform: details.isVisible ? "translateY(0)" : "translateY(80px)",
            transition: "all 2s ease-out",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mt-20 gap-4"
        >
          {cardData.map((card, index) => (
            <DetailCard key={index} number={card.number} text={card.text} />
          ))}
        </div>

        {/* About Section */}
        <div id="about" className="relative mt-10 z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center md:flex-row md:items-center md:justify-center">
          {/* left side text */}
          <div
            ref={about.elementRef}
            style={{
              opacity: about.isVisible ? 1 : 0,
              transform: about.isVisible
                ? "translatex(0)"
                : "translatex(-80px)",
              transition: "all 2s ease-out",
            }}
            className="w-full md:w-1/2 px-4 md:px-6 text-left md:text-left mt-6"
          >
            <span className="text-cusblack">About Our Gym</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-cusblack">
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
          <div
            ref={about.elementRef}
            style={{
              opacity: about.isVisible ? 1 : 0,
              transform: about.isVisible ? "translatex(0)" : "translatex(80px)",
              transition: "all 2s ease-out",
            }}
            className="w-full md:w-1/2 px-4 md:px-6 flex justify-center md:justify-end"
          >
            <img
              src={bggirl}
              alt="hero girl"
              className="h-[65vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Service Section  */}
        <div id="services"
          ref={servicesSection.elementRef}
          className="relative py-16 px-4 mt-10 bg-cover"
          style={{
            backgroundImage: `url(${bgserv})`,
            opacity: servicesSection.isVisible ? 1 : 0,
            transform: servicesSection.isVisible
              ? "translatey(0)"
              : "translatey(80px)",
            transition: "all 2s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cuswhite text-sm font-semibold uppercase tracking-widest mb-2">
                Our Fitness Services
              </p>
              <h2 className="text-cuswhite text-3xl md:text-4xl font-bold leading-tight">
                Everything You <span className="text-cusyellow">Need</span> to
                Reach
                <br /> Your <span className="text-cusyellow">Fitness</span>{" "}
                Goals
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Payments Section  */}
        <div id="payments"
          ref={paymentsSection.elementRef}
          style={{
            opacity: paymentsSection.isVisible ? 1 : 0,
            transform: paymentsSection.isVisible
              ? "translatey(0)"
              : "translatey(80px)",
            transition: "all 2s ease-out",
          }}
          className="relative py-16 px-4 mt-10 ${fadeClass(paymentsSection)}"
        >
          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cusblack text-sm font-semibold uppercase tracking-widest mb-2">
                Our Prices
              </p>
              <h2 className="text-cusblack text-3xl md:text-4xl font-bold leading-tight">
                Choose a <span className="text-cusyellow">Plan</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-content">
              {paymentPlans.map((plan, index) => (
                <PaymentCard key={index} {...plan} allFeatures={allFeatures} />
              ))}
            </div>
          </div>
        </div>

        {/* Trainers Section  */}
        <div id="trainers"
          ref={trainersSection.elementRef}
          className="relative py-16 px-4 mt-10 ${fadeClass(trainersSection)}"
          style={{
            backgroundImage: `url(${bgtrain})`,
            opacity: trainersSection.isVisible ? 1 : 0,
            transform: trainersSection.isVisible
              ? "translatey(0)"
              : "translatey(80px)",
            transition: "all 2s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cuswhite text-sm font-semibold uppercase tracking-widest mb-2">
                Meet Our Expert Trainers
              </p>
              <h2 className="text-cuswhite text-3xl md:text-4xl font-bold leading-tight">
                Train with <span className="text-cusyellow">professionals</span>{" "}
                who are <span className="text-cusyellow">passionate</span> about
                <br /> helping you{" "}
                <span className="text-cusyellow">succeed</span> Goals
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
              {trainerData.map((trainer, index) => (
                <TrainerCard key={index} {...trainer} />
              ))}
            </div>
          </div>
        </div>

        {/* contact Section  */}
        <div id="contact" className="relative mt-10 mb-10 z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center md:flex-row md:items-center md:justify-center">
          {/* left side text */}
          <div
            ref={contactSection.elementRef}
            style={{
              opacity: contactSection.isVisible ? 1 : 0,
              transform: contactSection.isVisible
                ? "translatex(0)"
                : "translatex(-80px)",
              transition: "all 2s ease-out",
            }}
            className="w-full md:w-1/2 px-4 md:px-6 text-left md:text-left mt-5"
          >
            <span className="text-cusblack">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-cusblack">
              Start Your
              <span className="text-cusyellow">
                {" "}
                Fitness Journey <br />
              </span>
              Today{" "}
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Have questions about our programs, membership plans, or training
              sessions? Send us a message.
            </p>
            <div className="bg-cusgray p-4 rounded-lg mt-6">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-cuswhite font-bold"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className=" bg-cuswhite text-cusgray p-2 rounded-md font-normal placeholder:text-cuswhite/50 border border-cuswhite/30 focus:outline-none focus:ring-2 focus:ring-cusyellow"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className=" bg-cuswhite text-cusgray p-2 rounded-md font-normal placeholder:text-cuswhite/50 border border-cuswhite/30 focus:outline-none focus:ring-2 focus:ring-cusyellow"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  name="message"
                  className="bg-cuswhite text-cusgray p-2 rounded-md font-normal placeholder:text-cuswhite/50 border border-cuswhite/30 focus:outline-none focus:ring-2 focus:ring-cusyellow"
                ></textarea>
                <button
                  type="submit"
                  className="btn bg-cusyellow text-cuswhite hover:bg-cusyellow/70 font-bold py-2 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* right side image */}
          <div
            ref={contactSection.elementRef}
            style={{
              opacity: contactSection.isVisible ? 1 : 0,
              transform: contactSection.isVisible
                ? "translatex(0)"
                : "translatex(80px)",
              transition: "all 2s ease-out",
            }}
            className="w-full h-full mt-5 md:w-1/2 px-4 md:px-6 flex justify-center md:justify-end rounded-lg overflow-hidden"
          >
            <div className="bg-cusgray/90 text-cuswhite rounded-lg w-full max-w-[30rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0714981648642!2d79.87573938691513!3d6.975545216899215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25966ac91e159%3A0xad3078f9079728e1!2sWarrior%20Zone%20Fitness%20Club!5e0!3m2!1sen!2slk!4v1773863576354!5m2!1sen!2slk"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[15rem] sm:h-[20rem] rounded-lg"
              />
              <div className="p-6 mt-5">
                <h1 className="text-2xl font-bold text-cuswhite text-center mb-5">
                  Fitness Center
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img src={phone} alt="phone" className="w-6 h-6" />
                    <span className="text-2xl font-normal">0711236549</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={mail} alt="mail" className="w-6 h-6" />
                    <span className="text-2xl font-normal">
                      MSG@Fitness.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={home} alt="home" className="w-6 h-6" />
                    <span className="text-2xl font-normal">
                      128 Fitness Avenue Colombo 05 Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;

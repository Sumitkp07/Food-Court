import React, { useEffect } from "react";
import hero from "../assets/images/hero.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className="w-full lg:px-20 px-10 lg:py-20 py-10 h-[100vh] bg-cover bg-center flex flex-col justify-center items-start gap-8 relative"
        style={{ backgroundImage: `url(${hero})`}}
      ><div className="box bg-black h-full w-[100%] absolute left-0 opacity-[.6]"></div>
        <h1 data-aos="zoom-in" className="text-6xl text-white font-bold z-40">
          Life is a combination <br /> of pizza & magic
        </h1>
        <p data-aos="zoom-in" className="text-xl text-white font-lg w-[70%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          delectus minima eos, veniam deleniti minus nihil hic animi doloribus
          vel, ad alias temporibus fuga! Aut aliquam non at ipsam corrupti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          delectus minima eos, veniam deleniti minus nihil hic animi doloribus
          vel, ad alias temporibus fuga! Aut aliquam non at ipsam corrupti!
          
        </p>
        <button
          data-aos="flip-up"
          className="text-lg bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-500"
        >
          ORDER NOW
        </button>
      </section>
    </>
  );
};

export default Hero;

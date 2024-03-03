import React, { useEffect } from "react";
3;
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import about1 from "../assets/images/about1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
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
        id="about"
        className="w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-[4px] border-orange-600 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon1}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-2xl font-lg text-center">ABOUT US</h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-[4px] border-orange-600 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon2}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-2xl font-lg text-center">ORGANIC</h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-[4px] border-orange-600 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon3}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-2xl font-lg text-center">PIZZA</h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-[4px] border-orange-600 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer"
        >
          <img
            src={icon4}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-2xl font-lg text-center">PASTA</h1>
        </div>
      </section>

      <section className="w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
        <div>
          <img
            data-aos="zoom-in"
            src={about1}
            alt=""
            className="lg:w=[800px] lg:h-[600px] rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1
            data-aos="zoom-in"
            className="text-2xl text-black font-semibold text-center"
          >
            WELCOME TO
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black font-bold text-center capitalize"
          >
            pizzaz pies
          </h1>
          <p data-aos="zoom-in" className="text-2xl text-slate-800 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad
            harum culpa ut neque consequatur distinctio? Iure enim, illo, eum in
            veritatis repellat fugiat tempora quam nemo reprehenderit, suscipit
            dolorum?
          </p>
          <button
            data-aos="flip-up"
            className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full hover:bg-black hover:text-white "
          >
            ORDER NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default About;

import React, { useEffect } from "react";
import { pizza } from "../Components/export";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopRated = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows : false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows : true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : true
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : true
          }
        }
      ]
    };
  return (
    <section
      id="pizza"
      className="h-fit w-full lg:px-20 px-3 lg:py-20 py-10 bg-cover bg-center flex flex-col justify-center items-center gap-6"
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl text-black font-bold text-center capitalize"
      >
        top rated
      </h1>
      <p
        data-aos="zoom-in"
        className="text-xl text-black text-center capitalize"
      >
        stop by and find out what all the buzz all about, order your favourite
        to create your ideal pizza
      </p>
      <div data-aos="slide-up" className="lg:w-[90%] w-full">
      <Slider {...settings}>
        {pizza.map((item, index) => {
          return (
            <div
              className="bg-[#e7e7e7] shadow-sm shadow-zinc-600 p-8 flex flex-col justify-center items-center gap-4 rounded-lg cursor-pointer"
              key={index}
              id="product-box"
            ><img src={item.image} alt="" 
            className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"/>
            <h1 id="title" className="text-black font-bold text-2xl text-center">{item.title}</h1>
            <h1 id="price" className="text-orange-500 text-3xl text-center font-bold">{item.price}</h1>
            <p id="desc" className="text-black text-lg text-center">{item.para}</p>
            <button className="bg-orange-600  text-white rounded-full px-8 py-3 hover:bg-white hover:text-black font-semibold">ORDER NOW</button>
            </div>
          );
        })}
      </Slider>
      </div>
    </section>
  );
};

export default TopRated;

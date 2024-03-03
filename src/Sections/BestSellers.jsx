import React, { useEffect } from 'react'
import { pizza } from '../Components/export';
import Aos from "aos";
import "aos/dist/aos.css";

const BestSellers = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className=' bg-black w-full lg:px-20 px-3 lg:py-20 py-10 bg-cover bg-center flex flex-col justify-center items-center gap-14'>
    <h1 data-aos="zoom-in" className="text-white text-6xl font-bold capitalize text-center">our best sellers</h1>
    <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
      {
        pizza.map((item, index)=>{
         return <div key={index}
          className='bg-white p-8 flex flex-col justify-center items-center gap-4 rounded-lg'
          ><img src={item.image} alt="pizza-image" className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"/>
          <h1 className="text-black text-center text-2xl font-bold">{item.title}</h1>
          <h1 id="price" className="text-orange-500 text-3xl text-center font-bold">{item.price}</h1>
          <p id="desc" className="text-slate-800 text-lg text-center">{item.para}</p>
            <button className="bg-orange-600  text-white rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all duration-500 font-semibold" >ORDER NOW</button>
          </div>
        })
      }
    </div>
    </section>
  )
}

export default BestSellers

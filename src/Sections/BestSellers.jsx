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
    <section className='w-full lg:px-20 px-3 lg:py-20 py-10 bg-cover bg-center flex flex-col justify-center items-center gap-14'>
      <div></div>
    </section>
  )
}

export default BestSellers

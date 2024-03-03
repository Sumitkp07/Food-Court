import React, { useEffect } from 'react';
import faqimg1 from '../assets/images/faq1.jpg';
import faqimg2 from '../assets/images/faq2.jpg';
import faqimg3 from '../assets/images/faq3.jpg';
import faqimg4 from '../assets/images/faq4.jpg';
import Aos from "aos";
import "aos/dist/aos.css";
import { Accordion } from 'flowbite-react';

const Faq = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section id='faq' className= 'w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-col-1 justify-center items-start gap-14'>
      <div id="left" className='flex flex-col justify-center items-center gap-12'>
      <h1 data-aos = "zoom-in" className='text-6xl text-black font-bold text-center capitalize'>frequently asked questions </h1>
      <div data-aos= "slide-up" className='w-full'>
      <Accordion className='flex flex-col justify-center items-center gap-2'>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='text-black border-none text-lg'>What are your opening?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">p;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eos exercitationem!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    <button data-aos= "flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold uppercase hover:bg-black hover:text-white transition-all duration-500'>Contact us</button>
      </div>
      <div id="image-box" className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4'>
        <img data-aos="zoom-in" src={faqimg1} alt="" className='w-[400px] h-[392px] rounded-xl'/>
        <img data-aos="zoom-in" src={faqimg2} alt="" className='w-[400px] h-[392px] rounded-xl'/>
        <img data-aos="zoom-in" src={faqimg3} alt="" className='w-[400px] h-[392px] rounded-xl'/>
        <img data-aos="zoom-in" src={faqimg4} alt="" className='w-[400px] h-[392px] rounded-xl'/>
      </div>
    </section>
  );
}

export default Faq;

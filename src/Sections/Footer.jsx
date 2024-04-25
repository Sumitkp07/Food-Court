import React from 'react';


const FFfooter = () => {
  return (
    <>
      <footer id='footer' className="py-2 pt-5">
        <div className="container max-w-[85vw] mx-auto my-5">
        <div className="row footer-content grid lg:grid-cols-5 grid-cols-1 gap-6 ">
          <div className="">
            <h5 className='mb-4 '> <span className='heading1 text-white'>Services</span></h5>
            <ul className="text-sm">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Nutrition</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">About</a></li>
            </ul>
          </div>
    
          <div className="">
            <h5 className='mb-4'><span className="heading2 text-white">Opening hours</span></h5>
            <ul className="text-sm">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Monday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Tuesday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Wednesday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Thrusday</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Full day : Friday</a></li>
            </ul>
          </div>
    
          <div className="">
            <h5 className='mb-4'><span className="heading3 text-white">Contact info</span></h5>
            <ul className="text-sm">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><span><i className="fa-brands fa-map fa-sm"></i></span> 780 S Arroyo Parkway Pasadena, CA 91105 California</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><i className="fa-brands fa-map fa-sm"></i> +1 626-263-0683</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 "><i className="fa-brands fa-map fa-sm"></i><span style={{textDecoration:"underline"}}> fitnessfreak@gmail.com</span></a></li>
            </ul>
          </div>
    
          <div className="col-span-2">
            <form>
              <h3 className='text-white text-3xl font-sans'>Give Feedback to our Mail</h3>
              <p className='text-white text-sm mt-4'>Monthly digest of what's new and exciting from us.</p>
              <div className="mt-4">
                <label for="newsletter1" className="visually-hidden"></label>
                <input id="newsletter1" type="text" className="form-control rounded-lg w-[65%]" placeholder="Email address"/>
                <button className="border border-red-700 py-2 px-3 text-sm text-red-700 rounded-lg ml-2" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        </div>
    
        <div className="text-center pt-4 pb-2 my-0 ">
         <p className='text-white'> <strong className='text-white'>Fitness<span style={{color: "red"}}>Freak</span>
         </strong> © 2024 Company, Inc. All rights reserved.</p>
          <ul className="flex justify-center items-center my-5">
            <li className="ms-3"><a className="link-body-emphasis bg-white py-2 px-2 rounded-full hover:bg-black" href="/">
            <i className="fa-brands fa-twitter fa-lg"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis bg-white py-2 px-2 rounded-full hover:bg-black" href="/">
            <i className="fa-brands fa-facebook fa-lg"></i></a></li>
            <li className="ms-3"><a className="link-body-emphasis bg-white py-2 px-2 rounded-full hover:bg-black" href="/">
            <i className="fa-brands fa-instagram fa-lg" ></i></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default FFfooter;

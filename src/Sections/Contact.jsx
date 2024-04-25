import React from "react";

const Contact = () => {

  return (
    <>
      <section id="login-section" style={{backgroundImage:`url('/image/login2.jpg')`}} className="bg-center">
        <div className="container">
          <div className="row pt-2">
            <div className="contact-us">
              <div className="form-conatiner shadow-md shadow-black">
                <div className="form-image">
                  <img src='../image/login1.jpg' alt="" />
                </div>
                <form action="">
                  <h1 id="from-heading" className="text-black">Get in Touch</h1>
                  <div className="contact-form"  id="Name">
                    <i class="fa-solid fa-user  fa-sm"></i>
                    <input 
                     type="text" 
                     placeholder="Name" 
                     required />
                  </div>
                  <div className="contact-form" id="Email">
                    <i class="fa-solid fa-envelope fa-sm"></i>
                    <input 
                     type="text" 
                     placeholder="Email" 
                     />
                  </div>
                  <div className="contact-form" id="Message">
                    <i class="fa-solid fa-message fa-sm"></i>
                    <textarea 
                     name="message" 
                     cols="30" rows="6"  
                     placeholder="Message.." 
                    >
                     </textarea>
                  </div>
                  <input type="submit" className="contact-btn" value='send message'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;



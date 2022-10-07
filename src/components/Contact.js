import React from 'react';



const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-primary text-white min-h-[732px] section'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4 animate-pulse'>
          Contact us
        </h2>
        {/* <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </p> */}

        {/* form */}
        <div className=" flex justify-center items-center">

       
        <form
            action="https://getform.io/f/9e288ede-19d5-4532-9bf1-8f51a0f90fe5"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
          </div>

        {/* social */}
        {/* <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='https://app.getform.io/password/forgot' key={index}>
                <img src={item.icon} alt="works"></img>
              </a>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Contact;

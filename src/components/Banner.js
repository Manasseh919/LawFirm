import React from "react";

// import image
import Image from "../assets/img/herpicture.png";
import Picture from "../assets/img/scales2.png";

// import components
import Header from "./Header";
import Appointment from "./Appointment";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-200 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-32 space-between ">
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-4xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px] animate-bounce repeat-1  ">
            Accessible, <br />{" "}
            <span className="text-accent">Understandable</span> <br />
            <span className="text-accent">Affordable.</span>
          </h1>
          {/* <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            architecto corrupti! Dolores rem dicta officia nam unde modi ad
            omnis.
          </p> */}
          {/* Appointment */}
          <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0 ">
            {/* <img src={Image} alt="" className="rounded-full" /> */}
            <Link
              to="contact"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto  items-center rounded-md hover:scale-110 duration-300 transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* Banner Image */}
        <div className="hidden flex-1 lg:flex lg:flex-col   ">
          <img src={Picture} alt="" className="rounded-lg pl-20 h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

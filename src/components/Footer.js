import React from 'react';

// import logo
import Logo from '/Users/manassehameyow/Downloads/manassehLAw/src/assets/img/THelawyers.png';

// import data
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className='section bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0' href='#'>
            <img src={Logo} alt='' />
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'
                  key={index}
                >
                  <a href='#'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Disclaimer
          </p>
        </div>

        <p className="text-xl mt-20">
        Rendering of any of the above services in no way establishes individual legal representation by Carla L. 
        Hines, Esq. unless expressly memorialized in a formal, executed Attorney-Client Agreement between both parties, 
        followed by payment of a retainer for Atty. Hines' services. 

        </p>

        <br />

        <p className="text-xl">
        The above services offered by Atty. Hines are of a general legal nature only! Atty.
         Hines reserves the right to refer clients needing individual and more in-depth legal 
         representation/services to other attorneys/firms suited to clients' specific legal issue/matter
        </p>
      </div>
        <p className='text-center'>
          &copy; Manasseh Ameyow 2022 - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

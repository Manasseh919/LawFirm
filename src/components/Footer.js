import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary-darker py-[24px] text-white text-sm text-center'>
       <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
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
    </div>
      <div className='container mx-auto'>2022 &copy; Manasseh Ameyow</div>
    </footer>
  );
};

export default Footer;

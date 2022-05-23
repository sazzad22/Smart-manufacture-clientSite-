import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
      <div className='mb-48'>
        <img className='w-full' src={banner} alt="" />
        <div className=" bg-white  lg:flex lg:flex-row  pt-1">
      <div className="max-w-7xl mx-auto  ">
        <main className=" mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
          <div className="sm:text-center ">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Warehouse Manager to enrich your</span>{" "}
              <span className="block text-sky-500 xl:inline">
                online business
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            We help online businessmen and retailers get from shopping cart to customer with warehouse management, reduced shipping costs, seamless integrations, and a live, human customer support team.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      

      
    </div>
        </div>
    );
};

export default Banner;
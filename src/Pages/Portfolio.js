import React from 'react';

const Portfolio = () => {
    return (
        <div className='lg:w-3/4 w-full lg:px-48 py-32 mx-auto min-vh-100 border shadow-xl  bg-gray-100 hover:bg-white hover:shadow-2xl duration-300  mb-20 '>
            <h2 className='text-center text-secondary text-4xl'>Sazzad Ur Rahman</h2>
            <p className='text-3xl' ><span className='font-semibold text-accent'>Email :</span>22joylobo@gmail.com</p>
            <p className='text-3xl' ><span className='font-semibold text-accent'>Education :</span>BSC in Civil Engineering</p>
            <p className='text-3xl' ><span className='font-semibold text-accent'>Skills :</span>Javascript,React,Node.js,Express,Mongodb,Web design,HTML, CSS, TailwindCss,Bootstrap, </p>
            <p className='text-3xl' ><span className='font-semibold text-accent'>About Me :</span></p>
            <h5 className='text-3xl'>I am an engineering Student and creator of this very website. I am learning to be a web developer. I love coding and my goal is to write good and efficient code .</h5>
            <p className='text-3xl' ><span className='font-semibold text-accent'>My Project Links :</span>https://lens-guru.web.app/ </p>
        </div>
    );
};

export default Portfolio;
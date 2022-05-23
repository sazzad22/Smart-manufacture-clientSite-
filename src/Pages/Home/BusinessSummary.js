import React from 'react';
import flag from '../../images/icons/flag.png';
import dashboard from '../../images/icons/dashboard.png';
import people from '../../images/icons/people (1).png';
import like from '../../images/icons/like.png';

const BusinessSummary = () => {
    return (
        <div>
            <div>
                <h2 className="lg:text-5xl text-3xl text-bold text-center ">Our Business has <span className='text-secondary'>Grown</span> tremendously</h2>
                <br />
                <p>Smart Manufacture, Ltd. is a leading global supplier of computer hardware,electronics , keyboard and mouse. Since 2001, Smart Manufacture has been recognized for providing value to its customers by manufacturing high-quality custom electronic products and delivering a superior level of customer service.</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:mx-16 my-20 gap-5 border px-5 py-2 shadow-xl rounded-xl'>
                <div className='grid grid-cols-1 justify-items-center my-5  '>
                    <img  className='w-3/12 lg:p-1' src={flag} alt="" />
                    <div className=''>
                        <h1 className='text-3xl text-neutral text-center font-bold'>10+</h1>
                        <h2 className='text-2xl font-semibold'>Countries</h2>
                    </div>
                </div>
                <div className='grid grid-cols-1 justify-items-center my-5 '>
                    <img  className='w-3/12 lg:p-1' src={dashboard} alt="" />
                    <div className=''>
                        <h1 className='text-3xl text-neutral text-center font-bold'>34+</h1>
                        <h2 className='text-2xl font-semibold'>Completed Projects</h2>
                    </div>
                </div>
                <div className='grid grid-cols-1 justify-items-center my-5 '>
                    <img  className='w-3/12 lg:p-1' src={people} alt="" />
                    <div className=''>
                        <h1 className='text-3xl text-neutral text-center font-bold'>180+</h1>
                        <h2 className='text-2xl font-semibold'>Happy Client</h2>
                    </div>
                </div>
                <div className='grid grid-cols-1 justify-items-center my-5 '>
                    <img  className='w-3/12 lg:p-1' src={like} alt="" />
                    <div className=''>
                        <h1 className='text-3xl text-neutral text-center font-bold'>120+</h1>
                        <h2 className='text-2xl font-semibold'>Feedback</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
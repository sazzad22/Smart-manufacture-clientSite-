import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';
import bg from '../../images/background.jpg';



const Parts = () => {
    const { data: products, isLoading, refetch } = useQuery('available', () =>fetch('http://localhost:5000/product').then(res=>res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-20'
        style={{
            backgroundImage: `url(${bg})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: 'cover',
              backgroundBlendMode:'lighten'
          }}
        >
            <h2 className="text-4xl lg:text-6xl text-center mt-20 font-extrabold ">Parts We <span className='text-secondary hover:text-primary duration-200'>Manufacture</span></h2>
            <h2 className="lg:text-4xl text-3xl text-center  font-semibold ">Best <span className='text-accent underline  hover:text-primary duration-200'>Computer Hardware</span> Out there</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 justify-items-center my-20'>
            {
                products.map(product => <Part
                    key={product._id}
                    product={product}
                    refetch={refetch}
                ></Part>)
            }
            </div>
        </div>
    );
};

export default Parts;
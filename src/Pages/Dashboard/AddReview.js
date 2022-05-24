import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const reviewRef = useRef('');
    const [user]=useAuthState(auth)
    const handleAddReview = e => {
        const reviewText = reviewRef.current.value;
        const review = {
            client: user?.displayName,
            email:user?.email,
            review:reviewText,
        }
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body:JSON.stringify(review)
            
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    return (
        <div className='border'>
            <div className=' lg:mt-20'>
                <h2 className='lg:text-4xl font-semibold text-accent text-center '>Leave a Review on our products or company</h2>
            <div className='text-center lg:mt-20'>
                <input ref={reviewRef} name='review' type="text" placeholder="What's On Your Mind" class="input input-success input-bordered input-lg w-full lg:max-w-lg max-w-sm" />
                <br />
            <button onClick={handleAddReview} className='btn my-10  btn-neutral w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in '>Add Review</button>
            </div>
            </div>
        </div>
    );
};

export default AddReview;
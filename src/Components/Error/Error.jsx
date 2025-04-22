import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
         <div className='mx-auto container mb-56 mt-4 '>
         <img className='mx-auto container w-xl' src="error.jpg" alt="" />
         <h2 className='text-3xl text-red-500 text-center font-bold'>404 Page Not Found</h2>
         <p className='text-gray-400 text text-center mt-4'>Opps! This page doesn't exist</p>
        <Link to="/">
        
      <div className='mx-auto container flex justify-center items-center mt-4'>
      <button class="btn btn-primary mx-auto text-center ">Go Back Home</button>
      </div>
        
        </Link>
         </div>
        </div>
    );
};

export default Error;
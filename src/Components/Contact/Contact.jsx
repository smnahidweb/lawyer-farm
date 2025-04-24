import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Loading from '../Loading/Loading';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    },); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

 
  return (
    <div>
      <div className='mx-auto container mb-56 mt-4'>
        <img
          className='mx-auto container w-xl h-[250px]'
          src="error.jpg"
          alt="404 Not Found"
        />
        <h2 className='text-3xl text-red-500 text-center font-bold'>
          404 Page Not Found
        </h2>
        <p className='text-gray-400 text text-center mt-4'>
          Oops! This page doesn't exist
        </p>
        <Link to="/">
          <div className='mx-auto container flex justify-center items-center mt-4 mb-4'>
            <button className="btn btn-primary mx-auto text-center">Go Back Home</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
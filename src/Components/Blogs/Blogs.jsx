import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { useLoaderData } from 'react-router';
import { CiCalendar } from "react-icons/ci";

const Blogs = () => {
    const BlogsData = useLoaderData();
    console.log(BlogsData)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate 1 second loading

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className='text-3xl text-center mt-10 mb-5'>Blogs</h2>
      <p className='text-gray-700 text-center'>Lets explore some basic question that make you good developer</p>

      {
        BlogsData.map(data => {
      
        return(

            <div className='bg-gray-200 p-7 rounded-2xl mb-8 mx-auto container mt-5'>
            
            <div>
            <h2 className='border-b border-dashed pb-4 text-left'>{data.question}</h2>
            <p className='border-b border-dashed pb-4 text-left'> <span className='text-green-400 font-bold'>Answer: </span> <br />{data.answer}</p>
        
      
            <p className='pt-4 text-left flex  gap-2' > <CiCalendar size={24}/>  Added at {data.addedDate}</p>
            </div>
      
       
      
              </div>

        );

        })
      }
    </div>
  );
};

export default Blogs;

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleData from '../SingleData/SingleData';
import Loading from '../Loading/Loading';
const AllData = () => {
    const data = useLoaderData();
    
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll,setShowAll] = useState(false)
    const sliceData = showAll ? data : data.slice(0,6);
    useEffect(() => {


        const timeout = setTimeout(() => {
            setLoading(false);
          }, 1000); 
        


  
        fetch('data.json')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            },);
            return () => clearTimeout(timeout);
    }, []);

    if(!data){
        return <Loading/>
        }

    return (
        <div>
            <div className='mx-auto container mb-10'>
                <h2 className='text-center text-4xl font-bold mb-4'>Our Best Lawyer</h2>
                <p className='text-center text-gray-600'>
                    Our Platform highly experienced corporate lawyer with 20+ years of success, offering expert legal solutions with integrity, professionalism, and a proven track record in complex business cases.
                </p>

             
                {loading && (
                    <div className='text-center my-6'>
                        <Loading />
                    </div>
                )}
            </div>
            

            <div className='grid grid-cols-1 mb-8 md:grid-cols-2 gap-8 mx-auto container'>
                {
                    sliceData.map(info => <SingleData key={info.id} info={info} />)
                }
            </div>

           <div className='text-center p-4'>
           <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center p-4"
          >
           {showAll?`Show Less Lawyer` : `Show All lawyer`}
          </button>
           </div>
           <div className='text-center mb-6 mt-6'>
            <h2 className='text-3xl mt-6 mb-6'>We Provide Best Law Services</h2>
            <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
           </div>

        </div>
    );
};

export default AllData;

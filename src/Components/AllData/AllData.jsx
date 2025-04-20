import React from 'react';
import { useLoaderData } from 'react-router';
import SingleData from '../SingleData/SingleData';

const AllData = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <div className='mx-auto container mb-10'>
            <h2 className='text-center text-4xl'>Our Best Lawer</h2>
            <p className='text-center'>Advocate Ishaque Ali is a highly experienced corporate lawyer with 20+ years of success, offering expert legal solutions with integrity, professionalism, and a proven track record in complex business cases.</p>
            </div>
            <div className='grid grid-cols-1 mb-8 md:grid-cols-3 gap-8'>
                {
                    data.map(info => <SingleData info={info}></SingleData>)
                }
            </div>
        </div>
    );
};

export default AllData;
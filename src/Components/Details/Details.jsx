import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProfileCard from '../ProfileCard/ProfileCard';

const Details = () => {
  const [data, setData] = useState([]); // Declare state to store fetched data
  const { id } = useParams(); // Destructure to get the id from params

  useEffect(() => {
    // Fetch data inside useEffect to ensure it's done after component mounts
    fetch('../data.json')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData); // Store the data in state
        // console.log(fetchedData); // Log the data
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

//   console.log(id); // Logs the id from the URL params

  return (
    <div>
      <div className='bg-gray-300 p-8 mx-auto container rounded-4xl mt-10 mb-10'>
        <h2 className='text-3xl text-center py-4'>Lawyers Profile Details</h2>
        <p className='text-center'>Please see the details about your selected lawyer. Here gives the overall details</p>
      </div>
      
      {
      data.length > 0 && (
        <ProfileCard profile={data} id={id} />  
      )}
    </div>
  );
};

export default Details;

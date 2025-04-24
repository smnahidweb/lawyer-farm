import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProfileCard from '../ProfileCard/ProfileCard';

const Details = () => {
  const [data, setData] = useState([]); 
  const { licenseNo} = useParams(); 

  useEffect(() => {
   
    fetch('../data.json')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData); 
      
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []); 


  return (
    <div>
      
      {
      data.length > 0 && (
        <ProfileCard profile={data} licenseNo={licenseNo} />  
      )}
    </div>
  );
};

export default Details;

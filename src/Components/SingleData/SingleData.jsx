import React from 'react';
import { Link } from 'react-router';
const SingleData = ({info}) => {
    return (
        <div className=" rounded-xl p-4 shadow-md bg-white w-full max-w-xl flex items-center gap-4">
 
  <img
    src={info.LawyerImage} 
    alt="Lawyer"
    className="w-28 h-28 object-cover rounded-md"
  />

 
  <div className="flex-1">
    
    <div className="flex gap-2 mb-1">
      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
      <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full ">{info.experience} Experience</span>
    </div>

   
    <h2 className="text-lg font-semibold text-left">{info.name}</h2>
    <p className="text-sm text-gray-600 text-left border-b border-dashed pb-2">{info.speciality}</p>

    
    <div className="text-sm text-gray-500 mt-1 text-left">
      <span className="inline-block mr-1 text-left">🔖</span>
      License No: {info.licenseNo}
    </div>

    
    <Link to={`/detail/${info.licenseNo}`}>
  <button className="mt-3 text-blue-600 border border-blue-600 hover:bg-blue-50 py-1 px-4 rounded-full text-sm w-full">
    View Details
  </button>
</Link>

  </div>
</div>


    );
};

export default SingleData;
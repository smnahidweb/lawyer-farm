import React from 'react';
import { Link } from 'react-router';

const ProfileCard = ({profile,id}) => {
   
    const SingleProfile = profile.find(p => p.id == id)
    console.log(SingleProfile)
    console.log(id)
    const {LawyerImage,name,licenseNo,experience,availability,fee,speciality
    } = SingleProfile || {}
    console.log(LawyerImage)
    return (
        <div className='mx-auto container  flex items-center justify-center mb-10  '>
            <div className="   border rounded-xl p-4 shadow-md bg-white w-full max-w-xl flex items-center gap-4">
  {/* Image on the Left */}
  <img
    src={LawyerImage} // replace with actual image
    alt="Lawyer"
    className="w-28 h-28 object-cover rounded-md"
  />

  {/* Info on the Right */}
  <div className="flex-1">
    {/* Badges */}
    <div className="flex gap-2 mb-1">
      {/* <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span> */}
      <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full ">{experience} Experience</span>
    </div>

    {/* Name & Specialty */}
    <h2 className="text-lg font-semibold">{name}</h2>
    <p className="text-sm text-gray-600"><small>{speciality}</small></p>
<div className='flex gap-2 p-3'>
  
  <h2 className='text-2xl'>Availability:</h2>
    
  {
    availability.map(day =>  <p className='bg-amber-300 p-2 rounded-2xl'>{day}</p>)
  }
</div>


    {/* License */}
    <div className="text-sm text-gray-500 mt-1">
      <span className="inline-block mr-1">🔖</span>
      License No: {licenseNo}
    </div>
    <p className='text-green-400 ml-1'> Consultation Fee: {fee}</p>

    {/* View Details Button */}
    <Link to={``}>
  <button className="mt-3 text-blue-600 border border-blue-600 hover:bg-blue-50 py-1 px-4 rounded-full text-sm">
    View Details
  </button>
</Link>

  </div>
</div>
        </div>
    );
};

export default ProfileCard;
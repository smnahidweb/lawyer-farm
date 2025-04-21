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
        <div>
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
    

  </div>
</div>

</div>

     <div className=" mx-auto container bg-gray-50 mb-10">
      <h2 className="text-lg font-semibold text-center border-b pb-2">Book an Appointment</h2>

      <div className="mt-4">
        <h3 className="font-medium mb-2">Availability</h3>

        <div className="flex justify-end mb-3">
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Lawyer Available Today
          </span>
        </div>

        <div className="bg-orange-100 text-orange-700 text-sm p-3 rounded-md mb-4 flex items-start gap-2 text-center">
          <svg className="w-5 h-5 mt-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20 text-center">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75h1.5v1.5h-1.5v-1.5zm0-6h1.5v4.5h-1.5v-4.5z" />
          </svg>
          <span className='text-center'>
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </span>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-200">
          Book Appointment Now
        </button>
      </div>
    </div>

        </div>
        


//  Booking section 

    );
};

export default ProfileCard;
import React from 'react';

const SingleData = ({info}) => {
    return (
        <div className="border rounded-xl p-4 shadow-md bg-white w-full max-w-xl flex items-center gap-4">
  {/* Image on the Left */}
  <img
    src={info.LawyerImage} // replace with actual image
    alt="Lawyer"
    className="w-28 h-28 object-cover rounded-md"
  />

  {/* Info on the Right */}
  <div className="flex-1">
    {/* Badges */}
    <div className="flex gap-2 mb-1">
      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
      <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full ">{info.experience} Experience</span>
    </div>

    {/* Name & Specialty */}
    <h2 className="text-lg font-semibold">{info.name}</h2>
    <p className="text-sm text-gray-600">{info.speciality}</p>

    {/* License */}
    <div className="text-sm text-gray-500 mt-1">
      <span className="inline-block mr-1">🔖</span>
      License No: {info.licenseNo}
    </div>

    {/* View Details Button */}
    <button className="mt-3 text-blue-600 border border-blue-600 hover:bg-blue-50 py-1 px-4 rounded-full text-sm">
      View Details
    </button>
  </div>
</div>


    );
};

export default SingleData;
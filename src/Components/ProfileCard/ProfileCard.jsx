import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
const ProfileCard = ({ profile, id }) => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const SingleProfile = profile.find(p => String(p.id) === String(id));

  if (!SingleProfile) {
    return (
      <div className="text-center mt-10 font-semibold bg-red-50 rounded-2xl mx-auto container mb-10">
       <h2 className='text-red-500 text-2xl text-center mb-4 pt-8'>No Lawyer Found</h2>
       <p className='text-center text-gray-400 '>No Lawyer found with this</p>
       <p className='text-center text-xl text-gray-400 mb-10'> ID: {id}</p>
       <Link to="/">
        
        <div className='mx-auto container flex justify-center items-center mt-4'>
        <button class="btn btn-primary mx-auto text-center mb-6 ">View All Lawyer</button>
        </div>
          
          </Link>
           </div>

         
    );
  }

  const {
    LawyerImage,
    name,
    licenseNo,
    experience,
    availability,
    fee,
    speciality,
  } = SingleProfile;

  const handleBookAppointment = () => {
    const existing = JSON.parse(localStorage.getItem('bookings')) || [];
    const isDuplicate = existing.some(item => String(item.id) === String(id));

    if (isDuplicate) {
      toast.warn(` Appointment is already added for ${name}! `);
    } else {
      const updatedBookings = [...existing, SingleProfile];
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      toast.success(`Appointment booked successfully for ${name}!`);
      setTimeout(() => {
        navigate('/mybooking');
      }, 1500);
    }
  };

  return (
    <div className="relative">
      {/* Loader Overlay */}
      {showLoader && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <Loading />
        </div>
      )}

      {/* Content shows ONLY after loader is hidden */}
      {!showLoader && (
        <>
          <div className='bg-gray-300 p-8 mx-auto container rounded-4xl mt-10 mb-10'>
            <h2 className='text-3xl text-center py-4'>Lawyers Profile Details</h2>
            <p className='text-center'>
              Please see the details about your selected lawyer. Here gives the overall details
            </p>
          </div>

          <div className='mx-auto container flex items-center justify-center mb-10'>
            <div className="border rounded-xl p-4 shadow-md bg-white w-full max-w-xl flex items-center gap-4">
              <div className=''>
              <img src={LawyerImage} alt="Lawyer" className="w-28 h-28 object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <div className="flex gap-2 mb-1">
                  <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full ml-3">
                    {experience} Experience
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-left ml-3">{name}</h2>
<p className="text-sm text-gray-600 text-left ml-3"><small>{speciality}</small></p>

<div className='flex flex-col gap-2 p-3 text-left'>
  <p className='text-2xl'><small>Availability:</small></p>
  <div className="flex gap-2 flex-wrap">
    {availability.map((day, i) => (
      <p key={i} className='text-amber-700 p-2 rounded-2xl bg-amber-100'>{day}</p>
    ))}
  </div>
</div>

<div className="text-sm text-gray-500 mt-1 text-left">
  <span className="inline-block mr-1">🔖</span> License No: {licenseNo}
</div>

<p className='text-green-400 ml-1 text-left'>Consultation Fee: {fee} Taka</p>

              </div>
            </div>
          </div>

          <div className="mx-auto container bg-gray-50 mb-10">
            <h2 className="text-lg font-semibold text-center border-b pb-2">Book an Appointment</h2>
            <div className="mt-4">
              <div className="flex justify-end mb-3">
                <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  Lawyer Available Today
                </span>
              </div>
              <div className="bg-orange-100 text-orange-700 text-sm p-3 rounded-md mb-4 flex items-start gap-2 text-center">
                <svg className="w-5 h-5 mt-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75h1.5v1.5h-1.5v-1.5zm0-6h1.5v4.5h-1.5v-4.5z" />
                </svg>
                <span>
                  Due to high patient volume, we are currently accepting appointments for today only.
                </span>
              </div>
              <button
                onClick={handleBookAppointment}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-200"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        </>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ProfileCard;

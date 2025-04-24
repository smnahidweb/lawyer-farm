import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rechart from '../Rechart/Rechart';
import { Link, Outlet } from 'react-router';
import Loading from '../Loading/Loading';
const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    },1000); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleCancel = (id) => {
    const updated = bookings.filter(item => item.id !== id);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setBookings(updated);
    toast.error(' Appointment cancelled!');
  };

  if (bookings.length === 0) {
    return (
      
      <div className="text-center  bg-gray-300 p-8 mx-auto container rounded-4xl mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4  ">You have no appointments booked yet.</h2>
        <p className='text-gray-500'>Our platform connect you with verified experienced lawyer across various specialist....</p>
        <ToastContainer position="top-center" autoClose={2000} />

        <div className='mx-auto container flex justify-center items-center mt-4'>
          <Link to="/">
          
          <button class="btn btn-primary mx-auto text-center ">Book an Appointment</button>
          
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4">
      
     
      <div className="container mx-auto p-4">
    
      <Rechart bookings={bookings} />

      </div>

      {bookings.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4 justify-between mb-6"
        >
         
          <div className="flex-1">
           <div className='flex justify-between'>
           <div>
           <h3 className="text-lg font-semibold">{item.name}</h3>
           <p className="text-gray-600 text-sm text-left">{item.speciality}</p>
           </div>
            
           <div>
           <p className="text-green-500 font-medium">Fee: {item.fee} taka</p>
           </div>
           </div>
            <div className="mt-4">
              <button
                onClick={() => handleCancel(item.id)}
                className="btn btn-outline btn-secondary text-black px-4 py-2 rounded-full text-sm w-full">
              
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      ))}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MyBooking;
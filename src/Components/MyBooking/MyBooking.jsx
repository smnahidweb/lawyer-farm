import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rechart from '../Rechart/Rechart';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter(item => item.id !== id);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setBookings(updated);
    toast.error('❌ Appointment cancelled!');
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-gray-600">No appointments booked yet.</h2>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Booked Appointments</h2>

      <div className="container mx-auto p-4">
      {/* ✅ Chart Above Cards */}
      <Rechart bookings={bookings} />

      </div>

      {bookings.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4 justify-between mb-6"
        >
          <img
            src={item.LawyerImage}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.speciality}</p>
            <p className="text-sm">License No: {item.licenseNo}</p>
            <p className="text-green-500 font-medium">Fee: {item.fee} taka</p>
            <div className="mt-4">
              <button
                onClick={() => handleCancel(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm"
              >
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

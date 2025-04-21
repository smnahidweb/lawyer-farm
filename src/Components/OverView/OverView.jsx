import React from 'react';
import CountUp from 'react-countup';


const OverView = () => {
    const stats = [
        { icon: 'https://i.ibb.co.com/Lh57zr3C/success-doctor.png', number: 199, label: 'Total Lawyer' },
        { icon: 'https://i.ibb.co.com/gL5SvSjT/success-review.png', number: 467, label: 'Total Reviews' },
        { icon: 'https://i.ibb.co.com/ZzJzpGk7/success-patients.png', number: 1900, label: 'Cases Initiated' },
        { icon: 'https://i.ibb.co.com/997cyKSn/success-staffs.png', number: 300, label: 'Total Staffs' }
      ];
     
      
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-300">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-white shadow-md p-6 rounded-lg text-center"
        >
          <div className="text-4xl mb-3"><img src={item.icon} alt="" /></div>
          <div className="text-3xl font-bold text-gray-800">
          {<CountUp  end={item.number} duration={2.75}  />  }+
             </div>
          <div className="text-gray-500">{item.label}</div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default OverView;
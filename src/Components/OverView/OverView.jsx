import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const OverView = () => {
  const stats = [
    { icon: 'https://i.ibb.co.com/Lh57zr3C/success-doctor.png', number: 199, label: 'Total Lawyer' },
    { icon: 'https://i.ibb.co.com/gL5SvSjT/success-review.png', number: 467, label: 'Total Reviews' },
    { icon: 'https://i.ibb.co.com/ZzJzpGk7/success-patients.png', number: 1900, label: 'Cases Initiated' },
    { icon: 'https://i.ibb.co.com/997cyKSn/success-staffs.png', number: 300, label: 'Total Staffs' }
  ];

  const [trigger, setTrigger] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          
          setTrigger(true);

          setTimeout(() => setTrigger(false), 1000);
        }
      },
      {
        threshold: 0.4, 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-300">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white shadow-md p-6 rounded-lg text-center"
          >
            <div className="text-4xl mb-3">
              <img src={item.icon} alt="" />
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {trigger && <CountUp end={item.number} duration={2.5} />}
              {!trigger && `${item.number}+`}
            </div>
            <div className="text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;

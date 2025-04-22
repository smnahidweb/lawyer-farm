import React from 'react';

const Banner = () => {
  return (
   <div className='mb-10 mx-auto container rounded-4xl'>
    <div
  className="hero min-h-[60vh] md:min-h-screen rounded-2xl shadow-lg overflow-hidden"
  style={{
    backgroundImage:
      "url(banner.png)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
      <p className="mb-5 w-2xl text-center mx-auto">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
     
    </div>
  </div>
</div>
   </div>
  );
};

export default Banner;

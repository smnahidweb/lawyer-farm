import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router';
const Footer = () => {
     const links = <>
        
        <NavLink to="/" className="mr-4">Home</NavLink>
        <NavLink to="/mybooking" className="mr-4">MyBooking</NavLink>
        <NavLink to="/blogs" className="mr-4">Blogs</NavLink>
        <NavLink to="/contact" className="mr-4">Contact Us</NavLink>
        
        </>
    return (
        <div>
          <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
  
  <img src="logo-footer.png" alt="" />
  <div className='flex'>
  {
    links
  }
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4">
   <Link to="https://web.facebook.com/programming-hero/"> <FaFacebook size={30} /></Link>
    <Link to="https://github.com/smnahidweb/"> <FaGithub size={30} /></Link>
    <Link to="https://www.youtube.com/@BinaryWaveAcademy"><FaYoutube  size={30} /></Link>

    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
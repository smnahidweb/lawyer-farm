import React from 'react';
import { Link,NavLink } from 'react-router';
const Navbar = () => {
    const links = <>
    
    <NavLink to="/" className="mr-4">Home</NavLink>
    <NavLink to="/mybooking" className="mr-4">MyBooking</NavLink>
    <NavLink to="/blogs" className="mr-4">Blogs</NavLink>
    <NavLink to="/contact" className="mr-4">Contact Us</NavLink>
    
    </>
    return (
        <div className='mx-auto container'>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   <div className='flex items-center'>
    <img src="logo.png" alt="" />
    <h2>Law.BD</h2>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-secondary">Connect Now</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;
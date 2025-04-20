import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
          <Footer></Footer>
            
        </div>
    );
};

export default MainLayOut;
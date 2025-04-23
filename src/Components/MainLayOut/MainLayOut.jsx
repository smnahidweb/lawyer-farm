import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

const MainLayOut = () => {
  
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
           <Navbar></Navbar>
           <div className='text-center'>
           {isLoading && <Loading />}
           <Outlet></Outlet>
           </div>
          <Footer></Footer>
            
        </div>
    );
};

export default MainLayOut;
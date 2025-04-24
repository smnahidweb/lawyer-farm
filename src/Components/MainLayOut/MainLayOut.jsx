import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation} from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';


const MainLayOut = () => {
   
    const [initialLoading, setInitialLoading] = useState(true);
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

       useEffect(() => {
        const timer = setTimeout(() => {
            setInitialLoading(false);
        },); 

        return () => clearTimeout(timer);
    }, []);

    if (initialLoading) {
        return <Loading />;
    }
    return (
        <div>

        
           <Navbar></Navbar>
           <div className='text-center min-h-[calc(100vh-100px)]'>
           {isLoading && <Loading />}
           <Outlet></Outlet>
           </div>
            <Footer />
            
        </div>
    );
};

export default MainLayOut;
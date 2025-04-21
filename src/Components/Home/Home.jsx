import React from 'react';
import Banner from '../Banner/Banner';
import AllData from '../AllData/AllData';
import Loading from '../Loading/Loading';
import OverView from '../OverView/OverView';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
          
            <AllData></AllData>
          <OverView></OverView>
        </div>
    );
};

export default Home;
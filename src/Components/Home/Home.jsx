import React from 'react';
import Banner from '../Banner/Banner';
import AllData from '../AllData/AllData';
import Loading from '../Loading/Loading';
import OverView from '../OverView/OverView';
import { useNavigation } from 'react-router';


const Home = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            {isLoading && <Loading />}
            <Banner></Banner>
          
            <AllData></AllData>
          <OverView></OverView>
        </div>
    );
};

export default Home;
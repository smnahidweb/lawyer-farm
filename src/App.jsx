

import './App.css'
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import Loading from './Components/Loading/Loading';
import Home from './Components/Home/Home';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => setLoading(false), 1000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  // if (loading) {
  //   return <Loading />; 
  // }

  return (
    <>


{loading ? <Loading /> : <Home />}
       <ToastContainer />

    </>
  )
}

export default App

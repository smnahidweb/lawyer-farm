

import './App.css'
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import Loading from './Components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <>
       <ToastContainer />
    </>
  )
}

export default App

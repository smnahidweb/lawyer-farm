import React from 'react';

import {
  createBrowserRouter,
 
} from "react-router";
import Home from './Home/Home';
import MainLayOut from './MainLayOut/MainLayOut';
import MyBooking from './MyBooking/MyBooking';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';



export const router = createBrowserRouter([
    {
      path: "/",
     Component:MainLayOut, 
     errorElement:Error,
     children:[
     {
      path: "/",
      loader: ()=> fetch('data.json'),
      Component: Home
    
     },
     {
        path:'/mybooking',
        Component:MyBooking
     },
     {
        path:'/blogs',
        Component: Blogs
     },
     {
        path:'contact',
        Component: Contact
     }

     
     
  ]
    },
  ]);
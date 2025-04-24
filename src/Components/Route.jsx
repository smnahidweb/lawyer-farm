import React from 'react';

import {
  createBrowserRouter,
 
} from "react-router";
import Home from './Home/Home';
import MainLayOut from './MainLayOut/MainLayOut';
import MyBooking from './MyBooking/MyBooking';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';

import Loading from './Loading/Loading';
import Details from './Details/Details';
import Error from './Error/Error';

export const router = createBrowserRouter([
    {
      path: "/",
      // hydrateFallbackElement: Loading,
     Component:MainLayOut, 
     errorElement:Error,
     children:[
     {
      path: "/",
      // hydrateFallbackElement: Loading,
      loader: ()=> fetch('../data.json'),
      Component: Home,
    
    
     },
     {
        path:'/mybooking',
       
        hydrateFallbackElement: <Loading/>,
        Component:MyBooking
     },
     {
        path:'/blogs',
        // hydrateFallbackElement: Loading,
        loader: ()=> fetch('../Blogsdata.json'),
        Component: Blogs
     },
     {
        path:'contact',
        Component: Contact
     },
     {
      path:'/detail/:licenseNo',
      loader: ()=> fetch('../data.json'),
      Component:Details
     },
     

     
     
  ]
    },
    {
      path: "*",
      Component: Error, // ✅ Only Navbar, no Footer
      children: [
        {
         //  path: "*",
         //  Component: Error,
        },
      ],
    },
  ]);
 
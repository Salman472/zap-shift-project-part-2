import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='space-y-2'>
            <header><Navbar/></header>
            <main className='max-w-11/12 mx-auto'><Outlet/></main>
           <div className='bg-black text-white mt-8'>
             <footer className='max-w-11/12 mx-auto '><Footer/></footer>
           </div>
        </div>
    );
};

export default RootLayout;
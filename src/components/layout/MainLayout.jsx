import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

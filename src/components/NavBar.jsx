import React from 'react';
import Logo from '../assets/images/airbnb-logo.png';

export default function NavBar() {
  return (
    <nav className='flex h-20 p-1 bg-gradient-to-r from-[#ff5a5f] to-red-200 shadow-md'>
      <img className='max-w-[100px]' src={Logo} width="" alt='Airbnb Logo'/>
    </nav>
  )
}

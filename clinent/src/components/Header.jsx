import React from 'react';
import { useState } from 'react';

const Header = () => {
  
  return(

    <div className='bg-blue-700 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-2xl font-bold'><h1>Logo</h1></div>
      <div className=''>
      <ul className="flex space-x-6">
            <li className=' text-white hover:font-bold'>Home</li>
            <li className=' text-white hover:font-bold'>Contact</li>
            <li className=' text-white hover:font-bold'>Service</li>
        </ul>
      </div>
      </div>
     </div> 
  )
};

export default Header

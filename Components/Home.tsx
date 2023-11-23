import React from 'react';
import Logo from './Logo';
import Button from './Button';

const Home = () => {
  return (
    <div className='w-full h-screen flex items-start justify-center bg-main/60'>
      <div className='flex flex-col items-center justify-start'>
        <Logo />
        <Button/>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Logo from './Logo';
import Button from './Button';
import Call from './Call';

const Home = () => {
  return (
    <div className='w-full h-screen flex items-start justify-center bg-main/60'>
      <div className='flex flex-col items-center justify-start w-full'>
        <Logo />
        <Button/>
        <Call/>
      </div>
    </div>
  );
};

export default Home;

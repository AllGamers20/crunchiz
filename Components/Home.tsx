import React from 'react';
import Logo from './Logo';
import Button from './Button';
import Call from './Call';

const Home = () => {
  return (
    <div className='md:w-full w-[500px] h-screen flex items-center justify-center bg-main/60'>
      <div className='flex flex-col items-center justify-start'>
        <Logo />
        <Button/>
        <Call/>
      </div>
    </div>
  );
};

export default Home;

import Link from 'next/link';
import React from 'react';
import { BiSolidFoodMenu } from 'react-icons/bi';

const Button = () => {
  return (
    <div className='flex w-[200px] p-3 items-center justify-center bg-main rounded-full gap-5 font-bold tracking-wider transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg'>
      <BiSolidFoodMenu size={25} className="hover:text-white" />
      <Link href={'#Menu'} className="hover:text-white">
        Check Menu
      </Link>
    </div>
  );
};

export default Button;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Submit = ({ onClick }: { onClick: any }) => {
  return (
    <>
      <div className='flex w-[200px] p-3 items-center justify-center bg-main rounded-full gap-5 font-bold tracking-wider transition-colors duration-300 ease-in-out text-black hover:bg-black hover:text-white hover:shadow-lg'>
        <FaWhatsapp
          className=' hover:text-white' // Removed the style prop
          size={25}
        />
        <button
          className="text-black font-bold text-lg tracking-wider hover:text-white border-0 "
          onClick={onClick}
        >
          ClickToOrder
        </button>
      </div>
    </>
  );
};

export default Submit;

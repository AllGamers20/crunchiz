import React from 'react';

const HeadLine = ({ title }: { title: any }) => {
  return (
    <div className='flex items-center justify-center gap-6 h-40 w-full  md:bg-fixed'>
      <div className='bg-main w-[100px] h-[2px]'></div>
      <h1 className='text-black uppercase text-2xl md:text-6xl font-bold tracking-wider'>{title}</h1>
      <div className='bg-main w-[100px] h-[2px]'></div>
    </div>
  );
};

export default HeadLine;

import Link from 'next/link'
import React from 'react'

const Top = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
    <Link href={'/'} className='flex w-[300px] p-3 items-center justify-center bg-main rounded-full gap-5 font-bold tracking-wider transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg font-RedPeapers'>
        Back To Top
    </Link>
    </div>
  )
}

export default Top
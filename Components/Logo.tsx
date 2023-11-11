import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
            src={'/Logo.ico'}
            alt={'Main'}
            width={400}
            height={400}
        />
  )
}

export default Logo
import Home from '@/Components/Home'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Crunchiz</title>
        <link rel="shortcut icon" href="Logo.ico" type="image/x-icon" />
      </Head>
      <Home/>
    </>
  )
}

export default index
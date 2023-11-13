import Home from '@/Components/Home'
import Menu from '@/Components/Menu'
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
      <Menu/>
    </>
  )
}

export default index
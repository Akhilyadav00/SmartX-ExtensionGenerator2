import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Navbar1'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import NavbarScreen from '../common/Navbar/NavbarScreen'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
import CustomCursor from '../ui/CustomCursor'

const Layout = () => {
  return (
    <div className='relative w-full h-screen'>
        <Navbar />
        <CustomCursor />
        {/* <NavbarScreen /> */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout

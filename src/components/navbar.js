import React from 'react'

const Navbar = () => {
  return (
    <nav className='white p-4 flex items-center justify-between w-full border-b-2 border-gray-300'>
      <div className='flex items-center'>
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt='Logo' className='w-10 h-10' />
        <span className='ml-2 text-xl font-serif font-semibold text-black'>Paynet.Io</span>
      </div>
      <div className='flex-grow flex justify-center space-x-12 mr-[35px]'>
        <a href='#' className='text-gray hover:text-gray-500'>Fees</a>
        <a href='#' className='text-gray hover:text-gray-500'>Carrers</a>
        <a href='#' className='text-gray hover:text-gray-500'>FAQ</a>
        <a href='#' className='text-gray hover:text-gray-500'>Contacts</a>
        <a href='#' className='text-gray hover:text-gray-500'>About</a>
      </div>
      <div className="flex items-center">
        <span className="text-gray mr-2  hover:text-gray-500 font-mono cursor-pointer">Sign Up</span>
        <span className="mx-3 text-gray"> / </span>
        <span className="text-gray ml-2  hover:text-gray-500 font-mono cursor-pointer">Login</span>
      </div>
    </nav>
  )}
export default Navbar
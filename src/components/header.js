import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='text-left my-6 ml-6'>
        <h1 className='text-6xl font-bold italic'>Sending Money Abroad <br/>has never been cheaper</h1>
        <p className='mt-4 font-normal italic text-sm text-gray-500'>Sending money with no limits to over 140 countries. Enjoy the live exchange<br/>rate with our £2 fee and a slick app that's made for you</p> 
        <button className='mt-4 px-[50px] py-[15px] bg-black text-white rounded-full hover:bg-slate-600'>Try it</button> 
      </header> 
    </div>
  )
}

export default Header
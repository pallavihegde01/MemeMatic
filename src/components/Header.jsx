import React from 'react'
import logo from '../assets/memelogo.jpeg'

const Header = () => {
  return (
    <>
    <div className='bg-purple-500 flex items-center p-3 gap-2'>
      <img src={logo} alt="memeLogo" className='w-16 h-16 rounded-2xl' />
      <span className='text-xl font-semibold'>MemeMatic</span>
    </div>
    </>
  )
}

export default Header
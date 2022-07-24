import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black '>
      <h1 className='w-full text-3xl font-bold text-[#6A0DAD]'>PRESTISSIMO.</h1>
      <ul className='hidden md:flex items-center'>
        <Link to="/" className='p-4 font-medium hover:text-[#6A0DAD]'>Home</Link>
        <li className='p-4 font-medium hover:text-[#6A0DAD]'>Pricing</li>
        <li className='p-4 font-medium hover:text-[#6A0DAD]'>About</li>
        <Link to="/signup" className="bg-[#6A0DAD] hover:bg-[#550a8a] flex justify-center py-2 w-[100px] rounded font-medium mx-2 text-white">Sign Up</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#ffffff] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#6A0DAD] m-4'>PRESTISSIMO.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Home</li>
          <li className='p-4 border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Pricing</li>
          <li className='p-4 border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>About</li>
          <li className='p-4 border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Sign Up</li>
          <li className='p-4 font-medium hover:text-[#6A0DAD]'>Sign In</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
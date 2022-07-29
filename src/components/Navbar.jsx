import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { user } = useAuthContext()

  const handleNav = () => {
    setNav(!nav)
  }

  const { logout } = useLogout()
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#6A0DAD]'>PRESTISSIMO.</h1>
      <ul className='hidden md:flex items-center'>
        <Link to="/" className='p-4 font-medium hover:text-[#6A0DAD]'>Home</Link>
        <Link to="/pricing" className='p-4 font-medium hover:text-[#6A0DAD]'>Pricing</Link>
        <Link to="/about" className='p-4 font-medium hover:text-[#6A0DAD]'>About</Link>
        {!user && <Link to="/signup" className="bg-[#6A0DAD] hover:bg-[#550a8a] flex justify-center py-2 w-[100px] rounded font-medium mx-2 text-white">Sign Up</Link>}
        {!user && <Link to="/login" className="bg-gray-500 hover:bg-gray-600 flex justify-center py-2 w-[100px] rounded font-medium text-white">Login</Link>}
        {user && <li onClick={logout}><Link to="/" className="bg-gray-500 hover:bg-gray-600 flex justify-center py-2 ml-4 w-[100px] rounded font-medium text-white">Logout</Link></li>}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-white ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#6A0DAD] m-4'>PRESTISSIMO.</h1>
        <ul className='uppercase p-4'>
          <Link to="/" className='p-4 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Home</Link>
          <Link to="/pricing" className='p-4 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Pricing</Link>
          <Link to="/about" className='p-4 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>About</Link>
          {!user && <Link to="/signup" className='p-4 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Sign Up</Link>}
          {!user && <Link to="/login" className='p-4 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Login</Link>}
          {user && <li className='p-4 font-medium hover:text-[#6A0DAD]' onClick={logout}><Link to="/">Logout</Link></li>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl fold-bold text-center py-8'>The Basics</h2>
          <p className='text-center text-4xl font-bold'>$99/Year</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 Ensemble</p>
            <p className='py-2 border-b mx-8'>Access to All Features</p>
            <p className='py-2 border-b mx-8'>Free Virtual Training</p>
          </div>
          <button className='bg-[#6A0DAD] hover:bg-[#550a8a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Info</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl fold-bold text-center py-8'>Custom Bundle</h2>
          <p className='text-center text-4xl font-bold'>$*/Year</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 or Unlimited Ensembles</p>
            <p className='py-2 border-b mx-8'>Pick and Choose Your Features</p>
            <p className='py-2 border-b mx-8'>Free Virtual Training</p>
          </div>
          <button className='bg-black hover:bg-gray-800 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Info</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl fold-bold text-center py-8'>The Works</h2>
          <p className='text-center text-4xl font-bold'>$299/Year</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Unlimited Ensembles</p>
            <p className='py-2 border-b mx-8'>Access to All Features</p>
            <p className='py-2 border-b mx-8'>Free Virtual Training</p>
          </div>
          <button className='bg-[#6A0DAD] hover:bg-[#550a8a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Info</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
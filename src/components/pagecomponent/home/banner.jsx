import React from 'react'
import banner from "../../resources/banner.jpg"

const Banner = () => {
  return (
    <div className="  h-screen bg-cover " style={{ backgroundImage: `url(${banner})` }}>
      <div className=' w-10/12 flex items-center mx-auto  h-full  '>
        <div className='w-5/12'>
          <h1 className='text-4xl font-roboto font-bold leading'>Boost Your Skills With New Way Of Learning</h1>
          <div className='flex gap-4 mt-4' >
            <button className='bg-white text-black p-4 rounded text-xl'>Get Started</button>
            <button className='bg-blue-900 text-white p-4 rounded text-xl'>Take a Tour </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
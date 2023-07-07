import React from 'react'
import galler1 from "../../resources/galler1.jpg"
import gallery2 from "../../resources/gallery2.jpg"
import gallery3 from "../../resources/gallery3.jpg"


const Program = () => {
  return (
    <div className='w-10/12 mx-auto  mt-8 mb-4 '>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold flex justify-center '>Popular Program</h1>
      </div>
      <div className='mt-8 flex  justify-center gap-4'>
        <button className='bg-sky-400  text-white text-md px-6 rounded '>Graduate</button>
        <button className='border-2 text-gray-600 text-md p-2 rounded'>PostGraduate</button>
        <button className='border-2 text-md p-2 rounded'>PhdGraduate</button>
        <button className='border-2 text-md p-2 rounded'>Training</button>
      </div>
      <div className='mt-8 grid grid-cols-3 h-full gap-4  '>
        <div className='border-2 shadow rounded  pointer transition ease-in-out duration-150 hover:translate-y-2 '>
          <div className='h-2/4'>
            <img className=' bg-cover rounded h-full w-full' src={galler1} alt="" />
          </div>
          <div className='m-4  '>
            <p className='text-sm'>Agriculture</p>
            <h1 className='text-lg font-bold'>Chemical Engineering</h1>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit </p>
            <button className='mt-4 bg-sky-400 text-sm px-4 py-2 rounded block mx-auto text-gray-200' >Apply Now</button>
          </div>
        </div>
        <div className='border-2 shadow rounded  transition ease-in-out duration-150 hover:translate-y-2'>
          <div className='h-2/4' >
            <img className='rounded h-full w-full' src={gallery3} alt="" />
          </div>
          <div className='m-4 '>
            <p className='text-sm'>Agriculture</p>
            <h1 className='text-lg font-bold'>Chemical Engineering</h1>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit </p>
            <button className='mt-4 bg-sky-400 text-sm px-4 py-2 rounded block mx-auto text-gray-200' >Apply Now</button>
          </div>
        </div>
        <div className='border-2 shadow rounded  transition ease-in-out duration-150 hover:translate-y-2'>
          <div className='h-2/4' >
            <img className='rounded h-full w-full' src={gallery3} alt="" />
          </div>
          <div className='m-4 '>
            <p className='text-sm'>Agriculture</p>
            <h1 className='text-lg font-bold'>Chemical Engineering</h1>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit </p>
            <button className='mt-4 bg-sky-400 text-sm px-4 py-2 rounded block mx-auto text-gray-200' >Apply Now</button>
          </div>
        </div>
      </div>
      <button className='mt-8 text-sm p-4 border-2 block mx-auto'>View all course</button>

    </div>
  )
}

export default Program
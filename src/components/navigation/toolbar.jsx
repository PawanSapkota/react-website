import React from 'react'

export const Toolbar = () => {
  return (
    <header className='bg-gray-200 fixed top-0 left-0 right-0' >
      <div className='flex justify-between items-center w-10/12 mx-auto h-[76px]'>

        <div>
          <h1 className='text-lg font-bold font-roboto'>Logo</h1>
        </div>
        <div>
          <ul className='flex gap-6 font-normal '>
            <li> <a href="#Home"> Home</a></li>
            <li> <a href="#course">Courses</a></li>
            <li> <a href="#blog"> Blog</a></li>
            <li> <a href="#Contact"> Contact</a></li>
          </ul>
        </div>
        <button className='bg-blue-900 pointer rounded p-2 text-white font-roboto'>Apply Now</button>
      </div>
    </header>
  )
}

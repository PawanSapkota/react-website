import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineWarning, AiFillRead } from 'react-icons/ai'

const Scholarship = () => {
    return (
        <div className=' w-10/12 mx-auto  p-2 grid grid-cols-4 justify-center align-center gap-4'>
            <div className='bg-yellow-400 rounded p-2 h-[8rem] flex gap-4 items-center'>
                <div className='h-10  text-yellow-900 w-10 bg-white rounded-full flex justify-center items-center text-2xl'>
                    <FaGraduationCap />
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold'>Scholarship</h2>
                    <p className='text-white text-xs'>Available</p>
                </div>
            </div>

            <div className='bg-red-400  rounded p-2 flex  gap-4 items-center'>
                <div className='h-10 text-red-900 w-10 bg-white rounded-full flex justify-center items-center text-2xl'>
                    <AiFillRead />
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold'>Scholarship</h2>
                    <p className='text-white text-xs'>Available</p>
                </div>
            </div>

            <div className='bg-blue-900 rounded p-2 flex  gap-4 items-center '>
                <div className='h-10 text-blue-900 w-10 bg-white rounded-full  flex justify-center items-center text-2xl'>
                    <AiOutlineWarning />
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold'>Scholarship</h2>
                    <p className='text-white text-xs'>Available</p>
                </div>
            </div>

            <div className='bg-sky-400  rounded p-2 flex  gap-4 items-center'>
                <div className='h-10 text-sky-900 w-10 bg-white rounded-full flex justify-center items-center text-2xl'>
                    <AiFillRead />
                </div>
                <div>
                    <h2 className='text-white text-lg font-semibold'>Scholarship</h2>
                    <p className='text-white text-xs'>Available</p>

                </div>
            </div>

        </div>
    )
}

export default Scholarship
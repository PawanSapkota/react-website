import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillCalendarMinusFill } from 'react-icons/bs'
import { BiLocationPlus } from 'react-icons/bi'

const Recentevent = () => {
    return (
        <div className='mt-8 h-screen '>
            <div className='  w-3/5 mx-auto'>
                <div>
                    <h1 className='mt-8 text-3xl text-gray-900 font-bold text-center'>Recent Event</h1>
                    <p className='mt-8 text-md text-gray-900 font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti quod repellendus vero debitis voluptas eaque beatae reprehenderit accusantium. Voluptas?</p>
                </div>

                <div className='grid grid-row-3 gap-4 mt-8'>
                    <div className='w-full border shadow h-36 rounded  flex gap-4'>
                        <div className='w-1/4 bg-blue-500  h-full rounded-l flex justify-center items-center flex-col'>
                            <h1 className='text-white text-3xl '>02</h1>
                            <p className='text-white text-lg'>Dec 2020</p>
                        </div>
                        <div className=' flex flex-col  justify-center'>
                            <h1 className='text-3xl font-gray-900 font-bold mb-4 '>How to speak like a native speaker?</h1>
                            <div className='flex justify-between '>
                                <div className='flex items-center gap-1'>
                                    <AiOutlineClockCircle />
                                    <p className='text-gray-400 text-sm'>10:30</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiLocationPlus />
                                    <p className='text-gray-400 text-sm'>Butwal</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BsFillCalendarMinusFill />
                                    <p className='text-gray-400 text-sm'>21 jun 2023</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-full border shadow h-36 rounded  flex gap-4'>
                        <div className='w-1/4 bg-yellow-500  h-full rounded-l flex justify-center items-center flex-col'>
                            <h1 className='text-white text-3xl '>02</h1>
                            <p className='text-white text-lg'>Dec 2020</p>
                        </div>
                        <div className=' flex flex-col  justify-center'>
                            <h1 className='text-3xl font-gray-900 font-bold mb-4 '>How to speak like a native speaker?</h1>
                            <div className='flex justify-between '>
                                <div className='flex items-center gap-1'>
                                    <AiOutlineClockCircle />
                                    <p className='text-gray-400 text-sm'>10:30</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiLocationPlus />
                                    <p className='text-gray-400 text-sm'>Butwal</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BsFillCalendarMinusFill />
                                    <p className='text-gray-400 text-sm'>21 jun 2023</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-full border shadow h-36 rounded  flex gap-4'>
                        <div className='w-1/4 bg-blue-900  h-full rounded-l flex justify-center items-center flex-col'>
                            <h1 className='text-white text-3xl '>02</h1>
                            <p className='text-white text-lg'>Dec 2020</p>
                        </div>
                        <div className=' flex flex-col  justify-center'>
                            <h1 className='text-3xl font-gray-900 font-bold mb-4 '>How to speak like a native speaker?</h1>
                            <div className='flex justify-between '>
                                <div className='flex items-center gap-1'>
                                    <AiOutlineClockCircle />
                                    <p className='text-gray-400 text-sm'>10:30</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiLocationPlus />
                                    <p className='text-gray-400 text-sm'>Butwal</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BsFillCalendarMinusFill />
                                    <p className='text-gray-400 text-sm'>21 jun 2023</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Recentevent
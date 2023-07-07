import React from 'react'
import group from '../../resources/group.jpg'

const Admission = () => {
    return (
        <div className='w-full h-screen bg-cover mt-8 flex justify-end' style={{ backgroundImage: `url(${group})` }}>
            <div className='w-3/5 bg-blue-900 opacity-80 '>
                <div className='flex flex-col gap-16 mx-auto w-[80%] mt-8'>
                    <div className='flex  items-center'>
                        <h1 className='text-3xl text-white font-bold '>Apply For Admission</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <div>
                            <p className='text-white text-md'>First Name</p>
                            <p className='text-white'>_____________</p>
                        </div>
                        <div>
                            <p className='text-white text-md'>Last Name</p>
                            <p className='text-white'>_____________</p>
                        </div>
                        <div>
                            <p className='text-white text-md'>Email id</p>
                            <p className='text-white'>________________</p>
                        </div>
                        <div>
                            <p className='text-white text-md'>Phone Number</p>
                            <p className='text-white'>________________</p>
                        </div>

                        <div className='mt-8'>
                            <p className='text-white text-md'>Write an application</p>
                            <p className='text-white mt-8'>_______________________________</p>
                        </div>
                    </div>


                    <div className='mt-8 '>
                        <button className='border text-white px-4 py-2 rounded '>Apply Now</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Admission
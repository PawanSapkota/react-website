import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className=' bg-blue-900 h-screen '>
            <div className='w-10/12 mx-auto grid grid-cols-12 gap-8'>
                <div className='col-span-8 ' >
                    <div className='pt-8'>
                        <h1 className='text-white font-bold text-xl'>Stay Updated</h1>
                        <div className='mt-8'>
                            <input className='py-2 w-3/4 px-4 ' type="text" placeholder='Enter You Email' />
                            <button className='bg-yellow-400 w-1/4 text-white py-2 px-4 '>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 '>
                    <div className='pt-8'>
                        <h1 className='text-white font-bold text-xl'>Stay Updated</h1>
                        <div className='mt-8 flex gap-4'>
                            <BsFacebook className='bg-blue-700 w-12 p-2 h-10 text-white' />
                            <BsInstagram className='bg-yellow-400 w-12 p-2 h-10 text-white' />
                            <AiOutlineTwitter className='bg-red-700 w-12 p-2 h-10 text-white' />
                            <AiFillGoogleCircle className='bg-blue-700 w-12 p-2 h-10 text-white' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 w-10/12 mx-auto h-2/4 items-center gap-4 mt-8'>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-white'>About Us</h1>
                    <div className='mt-6'>
                        <p className='text-white text-md py-1'>Online Earning</p>
                        <p className='text-white text-md py-1'>About Us</p>
                        <p className='text-white text-md py-1'>Career</p>
                        <p className='text-white text-md py-1'>Press Center</p>
                        <p className='text-white text-md py-1'>Become an instructor</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-white'>Campus</h1>
                    <div className='mt-6'>
                        <p className='text-white text-md py-1'>Online Earning</p>
                        <p className='text-white text-md py-1'>About Us</p>
                        <p className='text-white text-md py-1'>Career</p>
                        <p className='text-white text-md py-1'>Press Center</p>
                        <p className='text-white text-md py-1'>Become an instructor</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-white'>Support</h1>
                    <div className='mt-6'>
                        <p className='text-white text-md py-1'>Online Earning</p>
                        <p className='text-white text-md py-1'>About Us</p>
                        <p className='text-white text-md py-1'>Career</p>
                        <p className='text-white text-md py-1'>Press Center</p>
                        <p className='text-white text-md py-1'>Become an instructor</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-white'>Study</h1>
                    <div className='mt-6'>
                        <p className='text-white text-md py-1'>Online Earning</p>
                        <p className='text-white text-md py-1'>About Us</p>
                        <p className='text-white text-md py-1'>Career</p>
                        <p className='text-white text-md py-1'>Press Center</p>
                        <p className='text-white text-md py-1'>Become an instructor</p>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto mt-8 '>
                <div className='w-full h-px bg-gray-500 '></div>

            </div>
            <div className='flex mt-4 w-10/12 mx-auto'>
                <p className='text-white text-sm'>Copyright @2022 All rights reserved</p>
                <div className='h-6 w-px bg-white mx-1'></div>
                <p className='text-white text-sm'>This template is made by satuling.</p>
            </div>

        </div>
    )
}

export default Footer
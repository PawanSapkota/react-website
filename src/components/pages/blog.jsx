import React from 'react'
import blog from '../../components/resources/blog.png'
import women from '../../components/resources/women.png'
import food from '../../components/resources/food.avif'
import { MdPermContactCalendar } from 'react-icons/md'
import { BiComment } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Footer from '../footer/footer'

const Blog = () => {
    return (
        <div>
            <div>
                <img src={blog} alt="blog" />
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-12 mt-8'>
                <div className=' col-span-8 '>
                    <div className='w-full relative '>
                        <img src={women} alt="women" />
                        <div className='w-16 h-16 rounded bg-sky-400 absolute -bottom-10 left-4 flex justify-center items-center text-white'> Jan 02</div>
                    </div>

                    <div className='w-3/4 mx-auto'>
                        <div className='mt-4' >
                            <h1 className='text-2xl font-bold text-gray-800'>Google ink pack for new 35 stores</h1>
                            <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores impedit nulla nisi rem alias!</p>
                        </div>

                        <div className='flex justify-start items-center my-4'>
                            <MdPermContactCalendar className='text-blue-700' />
                            <p className='font-semibold'>Travel,Lifestyle</p>
                            <div className='w-px h-4  bg-black mx-1' ></div>
                            <BiComment className='text-semibold text-blue-700 ' />
                            <p className='text-sm font-semibold ml-px'>03</p>
                            <p className='text-sm font-semibold'>Comments</p>
                        </div>
                    </div>

                </div>
                <div className=' col-span-4'>
                    <div className='bg-gray-200 w-3/4 h-1/4 mx-auto py-4 '>
                        <div className='w-3/4 mx-auto '>
                            <div className='flex relative'>
                                <input className=' border rounded p-2 outline-none mt-1' type="text" placeholder='Search keyword' />
                                <button className='  absolute right-6 top-4'><FiSearch /></button>

                            </div>
                            <input className='border rounded p-2 mt-2 text-center outline-none' type="text" placeholder='Search' />

                        </div>
                    </div>

                    <div className='mt-8 bg-gray-200 w-3/4  mx-auto'>
                        <div className=' p-4 '>
                            <h1 className='text-2xl font-bold '>Contact</h1>
                            <p className='mt-8 text-gray-700 text-sm'>Food</p>
                            <p className='mt-8 text-gray-700 text-sm'>Technology</p>
                            <p className='mt-8 text-gray-700 text-sm'>Restaurants</p>
                            <p className='mt-8 text-gray-700 text-sm'>Bars</p>
                            <p className='mt-8 text-gray-700 text-sm'>Items</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* second */}
            <div className='w-10/12 mx-auto grid grid-cols-12 mt-8'>
                <div className=' col-span-8 '>
                    <div className='w-full relative '>
                        <img src={women} alt="women" />
                        <div className='w-16 h-16 rounded bg-sky-400 absolute -bottom-10 left-4 flex justify-center items-center text-white'> Jan 02</div>
                    </div>

                    <div className='w-3/4 mx-auto'>
                        <div className='mt-4' >
                            <h1 className='text-2xl font-bold text-gray-800'>Google ink pack for new 35 stores</h1>
                            <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores impedit nulla nisi rem alias!</p>
                        </div>

                        <div className='flex justify-start items-center my-4'>
                            <MdPermContactCalendar className='text-blue-700' />
                            <p className='font-semibold'>Travel,Lifestyle</p>
                            <div className='w-px h-4  bg-black mx-1' ></div>
                            <BiComment className='text-semibold text-blue-700 ' />
                            <p className='text-sm font-semibold ml-px'>03</p>
                            <p className='text-sm font-semibold'>Comments</p>
                        </div>
                    </div>

                </div>
                <div className=' col-span-4'>
                    <div className='bg-gray-200  w-3/4 mx-auto pt-4'>
                        <div className='p-4' >
                            <h1 className='font-bold text-xl '>Recent Post</h1>
                            <div className='flex mt-4'>
                                <div className='h-20 w-20'>
                                    <img src={food} alt="food" />
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <h1 className='font-bold text-lg'>Food</h1>
                                    <p>Jan 03,2023</p>
                                </div>
                            </div>

                            <div className='flex '>
                                <div className='h-20 w-20'>
                                    <img src={food} alt="food" />
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <h1 className='font-bold text-lg'>Food</h1>
                                    <p>Jan 03,2023</p>
                                </div>
                            </div>

                            <div className='flex '>
                                <div className='h-20 w-20'>
                                    <img src={food} alt="food" />
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <h1 className='font-bold text-lg'>Food</h1>
                                    <p>Jan 03,2023</p>
                                </div>
                            </div>


                            <div className='flex '>
                                <div className='h-20 w-20'>
                                    <img src={food} alt="food" />
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <h1 className='font-bold text-lg'>Food</h1>
                                    <p>Jan 03,2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 mb-2 bg-gray-200 w-3/4  mx-auto '>
                        <div className=' p-4 '>
                            <h1 className='text-2xl font-bold '>Tag Clouds</h1>
                            <div className='grid grid-cols-2 gap-4 mt-4'>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Music</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Entertain</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Love</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Romance</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Environment</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Sports</button>
                                <button className='bg-gray-400 px-4 py-2 text-white rounded'>Team</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />





        </div>
    )
}

export default Blog
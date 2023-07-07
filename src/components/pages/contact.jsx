import React from 'react'
import blog from '../../components/resources/blog.png'
import Footer from '../footer/footer'

function Contact() {
    return (

        <div className=' mx-auto h-screen'>
            <div>
                <img src={blog} alt="blog" />
            </div>
            <div className=' mx-auto '>
                <h1 className='mt-4 font-bold text-center text-2xl underline '> Our Location in Google Map</h1>
                <h3 className='mb-4 text-center '>Feel free to visit us</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113060.35262374498!2d83.3501334522506!3d27.682190594973047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal!5e0!3m2!1sen!2snp!4v1684311792160!5m2!1sen!2snp" className='w-full' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='my-4 w-7/12 mx-auto'>
                <h1 className='font-bold'>Get In Touch</h1>
                <div className='border border-black  h-30'>
                    <textarea className='w-full h-44 p-1 ' onResize={false} name="text" placeholder="Message"></textarea>
                </div>
                <div className='mt-8 grid grid-cols-2 gap-8 py-2' >
                    <input className='border border-gray-700 px-4 py-2 outline-none' type="text" placeholder='Enter Your Name' />
                    <input className='border border-gray-700 px-4 py-2 outline-none' type="text" placeholder='Enter Your Email ' />
                    <input className='border border-gray-700 px-4 py-2 outline-none' type="text" placeholder='Enter Your Subject' />
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default Contact
import React from 'react'
import Program from '../../components/pagecomponent/home/program'
import blog from '../../components/resources/blog.png'
import Footer from '../footer/footer'

const Course = () => {
    return (
        <div className='mt-16'>
            <div>
                <img src={blog} alt="blog" />
            </div>
            <Program />
            <Footer />
        </div>
    )
}

export default Course
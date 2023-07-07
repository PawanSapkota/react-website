import React from 'react'
import Recentevent from '../pagecomponent/home/recentevent'
import blog from '../../components/resources/blog.png'
import Footer from '../footer/footer'

const Page = () => {
    return (
        <div className='mt-16'>
            <div>
                <img src={blog} alt="" />
            </div>
            <Recentevent />
            <Footer />
        </div>
    )
}

export default Page
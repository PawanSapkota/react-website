import React from 'react'
import Banner from '../pagecomponent/home/banner'
import Scholarship from '../pagecomponent/home/scholarship'
import Program from '../pagecomponent/home/program'
import Latestcourse from '../pagecomponent/home/latestcourse'
import Recentevent from '../pagecomponent/home/recentevent'
import Admission from '../pagecomponent/home/admission'
import Footer from '../footer/footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Scholarship />
      <Program />
      <Latestcourse />
      <Recentevent />
      <Admission />
      <Footer />



    </div>
  )
}

export default Home
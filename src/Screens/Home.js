import React from 'react'
import Hero from '../Components/Hero'
import Plans from '../Components/Plans'
import Provider from '../Components/Provider'
import Organization from '../Components/Organization'
import Blog from '../Components/Blog'
import Media from '../Components/Media'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import View from '../Components/View'
import How from '../Components/How'
import Faq from '../Components/Faq'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Plans/>
        <View/>
        <Provider/>
        <How/>
        {/* <Organization/> */}
        {/* <Blog/> */}
        <Media/>
        <Testimonial/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default Home
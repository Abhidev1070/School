import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setplayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' Title='What we offer' />
        <Programs />
        <About setplayState={setplayState} />
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' Title='What student Says' />
        <Testimonials/>
        <Title subTitle='Contact us' Title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>

      <VideoPlayer playState={playState} setplayState={setplayState} />


    </div>
  )
}

export default App
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1> We Ensure education for a better world</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dolore nemo quas unde ea magnam modi reprehenderit perferendis? Debitis iure odio accusantium et perspiciatis recusandae ex ullam pariatur iusto qui.
              excepturi dolores.</p>
              <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        
    </div>
  )
}

export default Hero
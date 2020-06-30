import React from 'react'
import { HeroContainer } from './HomeCSS';
import { heroimgopt } from '../../../media/Images';

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-grid">
        <div className="hero-grid__left">
          <h1>Boost your<br/>innovation capacity</h1>
          <p>Innovation Factors is the leading IAAS platform for measuring and improving your innovation capacity through people-driven insights.</p>
        </div>
        <div className="hero-grid__right">
          <img src={heroimgopt} alt="hero_img" />
        </div>
      </div>

    </HeroContainer>
  )
}

export default Hero

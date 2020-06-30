import React from 'react'

// media
import { iconplan } from '../../../media/Images';

// css
import { Wrapper } from './PlansCSS';

const PlansContent = () => {
  return (
    <Wrapper className="page">
    <div className="section-image">
      <img src={iconplan} alt="" />
    </div>
    <h1>Plans</h1>
    </Wrapper>
  )
}

export default PlansContent

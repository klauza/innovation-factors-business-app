import React from 'react'


// media
import { iconcontact } from '../../../media/Images';

// css
import { Wrapper } from './ContactCSS';

const ContactContent = () => {
  return (
    <Wrapper className="page">

      <div className="section-image">
        <img src={iconcontact} alt="" />
      </div>
      <h1>Contact</h1>

    </Wrapper>
  )
}

export default ContactContent

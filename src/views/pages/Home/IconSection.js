import React from 'react'
import { Section } from './HomeCSS';

const IconSection = ({section}) => {
  return (
    <Section>
      <div className="section-image"><img src={section.img} alt=""/></div>
      <h1 className="section-title">{section.title}</h1>
      <p className="section-desc">{section.description}</p>
    </Section>
  )
}

export default IconSection

import React from 'react';

// SEO
import { Helmet } from 'react-helmet';

// content
import ContactContent from './ContactContent';


const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Innovation Factors - Contact</title>
        <meta name="description" content="Welcome to contact page" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Innovation Factors" />
        <meta property="og:description" content="Innovation Factors description" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:site_name" content="Innovation Factors" />
        <meta property="og:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta name="twitter:description" content="Innovation Factors twitter description" />
        <meta name="twitter:title" content="Innovation Factors twitter title" />
        <meta name="twitter:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
      </Helmet>

      <ContactContent/>
    </>
  )
}

export default Contact

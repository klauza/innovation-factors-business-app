import React, {useRef} from 'react';

// SEO
import { Helmet } from 'react-helmet';

// utils
import { handleClick } from '../../../utils/scrollIntoViewClick';

// content
import Hero from './Hero';
import IconSection from './IconSection';
import Contact from '../Contact'
import Plans from '../Plans'

// data
import home_icons from '../../../data/homeIcons';

// css
import { Wrapper } from './HomeCSS';

const Home = () => {

  const insight = useRef()


  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to blog's home page" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - the best blog" />
        <meta property="og:description" content="Blog about something awesome" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:site_name" content="Your App" />
        <meta property="og:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta name="twitter:description" content="Blog about something awesome" />
        <meta name="twitter:title" content="Blog - the best blog" />
        <meta name="twitter:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
      </Helmet>

      <Wrapper className="page">
        <Hero />

        <button className="hero-arrow" onClick={()=>handleClick(insight)}>
          <svg width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362">
            <g>
              <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </g>
          </svg> 
          <svg width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362">
            <g>
              <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </g>
          </svg> 
        </button>

        <div id="insight" className="insight" ref={insight}>
          <h1>Insights into your innovation factors</h1>
          <p>Gather structured data from your people to drive improvements in the organisation's innovation capacity.</p>
        </div>
        
        <div className="sections">
          {home_icons.map((sec, i) => <IconSection key={i} section={sec} />)}
        </div>

        <Contact />
        <Plans />
      
      </Wrapper>
    </>
  )
}

export default Home

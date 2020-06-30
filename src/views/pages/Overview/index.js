import React, { useState } from 'react';

// SEO
import { Helmet } from 'react-helmet';

// tabs
import InnovationCapacity from './tabs/InnovationCapacity';
import Stages from './tabs/Stages';
import Groupsets from './tabs/Groupsets';
import Comments from './tabs/Comments';
import IndividualInnovationFactors from './tabs/IndividualInnovationFactors';
import ImprovementResources from './tabs/ImprovementResources';

// css
import { Wrapper } from './OverviewCSS';

const Overview = () => {

  const [tab, setTab] = useState(0);

  const tabs = [
    {
      title: "Innovation Capacity",
      content: <InnovationCapacity />,
      id: 0
    }, 
    {
      title: "Stages",
      content: <Stages />,
      id: 1
    }, 
    {
      title: "Groupsets",
      content: <Groupsets />,
      id: 2
    },
    {
      title: "Comments",
      content: <Comments />,
      id: 3
    },
    {
      title: "Individual Innovation Factors",
      content: <IndividualInnovationFactors />,
      id: 4
    },
    {
      title: "Improvement Resources",
      content: <ImprovementResources />,
      id: 5
    }

  ]

  const handleChangeTab = (id) => {
    setTab(id);
  }

  return (
    <>
      <Helmet>
        <title>Innovation Factors - Overview</title>
        <meta name="description" content="Welcome to overview page" />
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

      <Wrapper className="page">

        <div className="overview-grid">
          <div className="tabs">
            {tabs.map((item, i)=>(
              <button key={i} className={`${tab === item.id ? 'tab-active' : null}`} onClick={()=>{handleChangeTab(item.id)}}><div className="pillar"/><span>{item.title}</span></button>
              ))}
          </div>

          <div className="content">
            {tabs[tab].content}
          </div>
        </div>

      </Wrapper>
    </>
  )
}

export default Overview

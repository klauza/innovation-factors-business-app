import React, { useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// other
import Switch from 'react-switch';
import { useSpring, animated } from 'react-spring';

// media & css
import { ThemeContext } from 'styled-components';
import { HomeIcon } from '../../media/Icons';
import { logo } from '../../media/Images';
import { Wrapper } from './NavigationCSS';

import Modal from './Modal';

// import history from '../../views/history';

// ---
const Navigation = ({location}) => {


  const { text, colors, title } = useContext(ThemeContext);

  // modal
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




  return (

    <Wrapper>
    <Modal open={open} handleClose={handleClose} />

    <div className="nav-container">
      <NavLink to="/" className="nav-container__logo">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="nav-container__links">

        <div className="nav-pc-links">
          {location === "/" && <span><a href="#insight">WHY INNOVATION FACTORS?</a></span>}
          <NavLink to="/overview">OVERVIEW</NavLink>
          <NavLink to="/plans">PLANS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/login">LOG IN</NavLink>
        </div>

        <button onClick={()=> { handleClickOpen()} }> 
          <svg viewBox="0 0 512 512" width="512" height="512">
            <g>
              <g>
                <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>




    </Wrapper>
  )
}

export default Navigation

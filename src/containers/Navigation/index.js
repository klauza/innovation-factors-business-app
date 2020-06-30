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
          {location === "/" && <span>WHY INNOVATION FACTORS?</span>}
          <NavLink to="/overview">OVERVIEW</NavLink>
          <NavLink to="/plans">PLANS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/login">LOG IN</NavLink>
        </div>

        <button onClick={()=> { handleClickOpen()} }> 
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
            Sorry, your browser does not support inline SVG.
          </svg> 
        </button>
      </div>
    </div>




    </Wrapper>
  )
}

export default Navigation

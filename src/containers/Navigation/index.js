import React from 'react';
import { NavLink } from 'react-router-dom';

// media & css
// import { ThemeContext } from 'styled-components';
import { logo } from '../../media/Images';
import { Wrapper } from './NavigationCSS';

import Modal from './Modal';

// ---
const Navigation = ({ location }) => {
  // const { text, colors, title } = useContext(ThemeContext);

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
            {location === '/' && (
              <span>
                <a href="#insight">WHY INNOVATION FACTORS?</a>
              </span>
            )}
            {location !== '/' && (
              <NavLink to="/" className="home-link">
                <svg
                  viewBox="0 0 512.001 512.001"
                  width="512.001"
                  height="512.001"
                >
                  <g>
                    <g>
                      <path
                        d="M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
                    c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
                    c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
                    c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
                    c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z" />
                    </g>
                  </g>
                </svg>
              </NavLink>
            )}
            <NavLink to="/overview">OVERVIEW</NavLink>
            <NavLink to="/plans">PLANS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/login">LOG IN</NavLink>
          </div>

          <button
            onClick={() => {
              handleClickOpen();
            }}
          >
            <svg viewBox="0 0 512 512" width="512" height="512">
              <g>
                <g>
                  <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navigation;

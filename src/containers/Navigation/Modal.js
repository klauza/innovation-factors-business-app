import React from 'react';
import { NavLink } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div id="alert-dialog-slide-title" className="modal-links">
          <NavLink to="/overview" onClick={handleClose}>
            OVERVIEW
          </NavLink>
          <NavLink to="/plans" onClick={handleClose}>
            PLANS
          </NavLink>
          <NavLink to="/contact" onClick={handleClose}>
            CONTACT
          </NavLink>
          <NavLink to="/login" onClick={handleClose}>
            LOG IN
          </NavLink>
        </div>

        <button onClick={handleClose}>
          <svg viewBox="0 0 365.696 365.696" width="365.696" height="365.696">
            <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
          </svg>
        </button>
      </Dialog>
    </div>
  );
}

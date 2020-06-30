import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({open, handleClose}) {



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
        <div id="alert-dialog-slide-title">
          title
          company
          <img alt="image" className="detail-logo" src="" />
        </div>

        <DialogContent>
          dialogcontent
        </DialogContent>

        <DialogActions>
          <button onClick={handleClose}>
            Disagree
          </button>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <button>
              Apply
            </button>
          </a>

        </DialogActions>
      </Dialog>
    </div>
  );
}
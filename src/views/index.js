import React, {useRef} from 'react';

import history from './history';
import { Router, Route,  Switch } from 'react-router-dom';

// animations
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';



// containers
import Navigation from '../containers/Navigation';
// import ContactForm from '../containers/ContactForm';




const Main = ( { toggleTheme }) => {



  return (

      <Router history={history}>

        <Route render={({ location }) => (

          <div className="views-container">
            <Navigation toggleTheme={toggleTheme} location={location.pathname} />
                  
            <div>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/plans" component={Plans} />
                <Route exact path="/login" component={LogIn} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          
        )}/>

      </Router>
  )
}

export default Main

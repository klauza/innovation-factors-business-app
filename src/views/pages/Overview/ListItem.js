import React from 'react';
import { ProjectDiv } from './ListCSS';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops'

// data
import { factoryList } from './FactoryList';

const ListItem = ({ isToggled, project, id, toggle }) => {


    
  const [isFactoryToggled, setIsFactoryToggled] = React.useState(null);

  const toggleFactory = (id) => {
    if(isFactoryToggled===id){
      setIsFactoryToggled(null)
      return
    }
    setIsFactoryToggled(id)
  }

  const readMoreClick = () => {
    toggle(id);
    if(isToggled===id) return

  }



  return (
    <ProjectDiv key={id} className="project project__container">

      <div className="project__main">
        <div className="project__main-top">
          <div className="project-icon">
            <img src={project.icon} alt="" />
          </div>

          <div className="project-headers">
            <div>{project.title}</div>
            <button onClick={readMoreClick}>Innovation factors {isToggled===id ? "^" : "v"}</button>
          </div>

          <div>{project.score}</div>

          <button className="improvement-resources">Improvement Resources</button>

        </div>

        <Spring from={{ height: 0 }} to={{ height: isToggled===id ? 'auto' : 0 }}>
          {props => (
            <animated.div className="project__main-bot" style={props}>
              <ul>
                {factoryList.map((itm, i)=>
                <div style={{marginBottom: "25px"}}key={i}>
                  <li>
                    <span>{itm.title}</span>
                    <span>{itm.score}</span>
                    <button onClick={()=>{toggleFactory(itm.id)}}>Factor Fix</button>
                    
                  </li>
                    {isFactoryToggled === itm.id && <div className="content-factor">{itm.content}</div>}
                  </div>
                )}

             </ul>
            </animated.div>
          )}

        </Spring>

      </div>

  

    </ProjectDiv>
  )
}

export default ListItem
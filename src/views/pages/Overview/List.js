import React from 'react';

import { file, chart, settings, tab } from '../../../media/Icons';

import ListItem from './ListItem';


const List = () => {
  
  const [isToggled, setIsToggled] = React.useState(null);

  const toggle = (id) => {
    if(id === isToggled){
      setIsToggled(null);
    } else{
      setIsToggled(id);
    }
  }

  const cardElements = [
    {
      id: 0,
      icon: file,
      title: 'Internal Ideas',
      score: "5.1"
    },
    {
      id: 1,
      icon: chart,
      title: 'External Ideas',
      score: "5.1"
    },
    {
      id: 2,
      icon: settings,
      title: 'Synthesis',
      score: "5.1"
    },
    {
      id: 3,
      icon: tab,
      title: 'Selection',
      score: "5.1"
    },
    {
      id: 4,
      icon: file,
      title: 'Development',
      score: "5.1"
    },
    {
      id: 5,
      icon: chart,
      title: 'Roll-out',
      score: "5.1"
    }
  ]

  return (
    <div style={{padding: '2.5px'}}>

      {
        cardElements.map((project, id) => { return (
            <ListItem 
              key={id}
              isToggled={isToggled} 
              project={project} 
              id={project.id} 
              toggle={toggle} 
            />
          )}
      )}

    </div>
  )
}

export default List
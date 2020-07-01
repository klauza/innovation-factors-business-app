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

  const data = [
    {
      id: 0,
      icon: file,
      title: 'Internal Ideas',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    },
    {
      id: 1,
      icon: chart,
      title: 'External Ideas',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    },
    {
      id: 2,
      icon: settings,
      title: 'Synthesis',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    },
    {
      id: 3,
      icon: tab,
      title: 'Selection',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    },
    {
      id: 4,
      icon: file,
      title: 'Development',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    },
    {
      id: 5,
      icon: chart,
      title: 'Roll-out',
      score: "5.1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula congue nunc eget aliquet. Sed ut venenatis sapien. Cras ut lacus eget dolor commodo suscipit non in elit.",
    }
  ]

  return (
    <div style={{padding: '2.5px'}}>

      {
        data.map((project, id) => { return (
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
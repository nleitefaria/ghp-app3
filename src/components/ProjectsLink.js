import React from 'react';
import {
	  Route,
	  NavLink
}
from "react-router-dom";

import Projects from './Projects';

class ProjectsLink extends React.Component
{
  render() {
      return (
         <div>
            <NavLink to={`/projects/${this.props.id}`}>Projects</NavLink>
            <div>
							<Route exact path="/projects/:id" component={Projects}/>
            </div>
         </div>
      );
   }
}

export default ProjectsLink;

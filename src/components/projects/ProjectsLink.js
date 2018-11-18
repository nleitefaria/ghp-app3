import React from 'react';
import { Route, NavLink } from "react-router-dom";

import ProjectsOfEmployee from './ProjectsOfEmployee';

class ProjectsLink extends React.Component
{
  render() {
      return (
         <div>
            <NavLink to={`/projects/employee/${this.props.id}`}>Projects</NavLink>
            <div>
							<Route path="/projects/employee/:id" component={ProjectsOfEmployee}/>
            </div>
         </div>
      );
   }
}

export default ProjectsLink;

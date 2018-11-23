import React from 'react';
import { Route, NavLink } from "react-router-dom";

import { Row, Col } from 'reactstrap';

import ProjectsOfEmployee from './ProjectsOfEmployee';
import ProjectsOfEmployeeAddModal from './ProjectsAddModal';

class ProjectsLink extends React.Component
{
  render() {
      return (
         <div>
            <NavLink to={`/projects/employee/${this.props.id}`}>Projects</NavLink>
            <div>
					<Route path="/projects/employee/:id" component={ProjectsOfEmployee}/>
            </div>
            <Row>
               <Col xs="1"><ProjectsOfEmployeeAddModal></ProjectsOfEmployeeAddModal></Col>
            </Row>
         </div>
      );
   }
}

export default ProjectsLink;

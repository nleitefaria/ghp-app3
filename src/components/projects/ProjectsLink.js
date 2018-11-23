import React from 'react';
import { Row, Col } from 'reactstrap';

import ProjectsOfEmployeeAddModal from './ProjectsOfEmployeeAddModal';

class ProjectsLink extends React.Component
{
  render() 
  {
      return (
         <div>            
            <Row>            
               <Col xs="1"><ProjectsOfEmployeeAddModal id={this.props.id}></ProjectsOfEmployeeAddModal></Col>
            </Row>
         </div>
      );
   }
}

export default ProjectsLink;

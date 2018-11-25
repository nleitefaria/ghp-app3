import React from 'react';

import ProjectsOfEmployeeAddModal from './ProjectsOfEmployeeAddModal';

class ProjectsLink extends React.Component
{
  render() 
  {
      return (
         <div>            
            <ProjectsOfEmployeeAddModal id={this.props.id}></ProjectsOfEmployeeAddModal>
         </div>
      );
   }
}

export default ProjectsLink;

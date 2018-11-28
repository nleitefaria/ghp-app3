import React from 'react';

import EmployeeOfProjectsAddModal from './EmployeeOfProjectsAddModal';

class EmployeesLink extends React.Component
{
  render() {
      return (
         <div>            
         	<EmployeeOfProjectsAddModal id={this.props.id}></EmployeeOfProjectsAddModal>
         </div>
      );
   }
}

export default EmployeesLink;

import React from 'react';
import { Route, NavLink } from "react-router-dom";

import EmployeesOfProject from './EmployeesOfProject';

class EmployeesLink extends React.Component
{
  render() {
      return (
         <div>
            <NavLink to={`/employees/project/${this.props.id}`}>Employees</NavLink>
            <div>
              <Route path="/employees/project/:id" component={EmployeesOfProject}/>
            </div>
         </div>
      );
   }
}

export default EmployeesLink;

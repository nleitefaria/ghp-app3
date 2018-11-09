import React from 'react';
import {
	  Route,
	  NavLink
}
from "react-router-dom";

import Employees from './Employees';

class EmployeesLink extends React.Component
{
  render() {
      return (
         <div>
            <NavLink to={`/employees/${this.props.id}`}>Employees</NavLink>
            <div>
              <Route path="/employees" component={Employees}/>
            </div>
         </div>
      );
   }
}

export default EmployeesLink;

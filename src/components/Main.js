import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
}
from "react-router-dom";

import Home from './Home';
import Employees from './Employees';
import Projects from './Projects';

class Main extends Component
{
	  render() {
	    return (
	    		<HashRouter>
	            	<div>
	            		<div>
	            			
	            						<ul className="header">
	            							<li><NavLink to="/">Home</NavLink></li>
	            							<li><NavLink to="/employees">Employees</NavLink></li>
	            							<li><NavLink to="/projects">Projects</NavLink></li>

	            						</ul>

	            						<div className="content">
	            							<Route exact path="/" component={Home}/>
	            							<Route path="/employees" component={Employees}/>
	            							<Route path="/projects" component={Projects}/>

	            						</div>
	            					
	            		</div>
	            	</div>
	            </HashRouter>
	    );
	  }
}

export default Main;

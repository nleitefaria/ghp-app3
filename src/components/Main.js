import React, { Component } from 'react';
import {
	  Route,
	  NavLink,
	  HashRouter
}
from "react-router-dom";

import 
{
	  Container, Row, Col
} 
from 'reactstrap';

import Home from './Home';
import Employees from './Employees';
import Projects from './Projects';
import Header from './Header';

class Main extends Component
{
	  render() {
	    return (					
				<HashRouter>				
	            	<div>
	            		<div>
							<Container>
	            				<Row>
	            					<Col>
										<Header></Header>
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
									</Col>
	            				</Row>
	            			</Container>            					
	            		</div>
	            	</div>
	            </HashRouter>								
	    );
	  }
}

export default Main;

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

import Employees from './Employees';
import Projects from './Projects';
import Other from './Other';
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
														<NavLink to="/"><b>Employees</b></NavLink> | <NavLink to="/projects"><b>Projects</b></NavLink> | <NavLink to="/other"><b>Other (Context API)</b></NavLink>
	            								<div className="content">
	            									<Route exact path="/" component={Employees}/>
	            									<Route path="/projects" component={Projects}/>
	            									<Route path="/other" component={Other}/>
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

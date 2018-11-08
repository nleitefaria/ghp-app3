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
														<NavLink to="/">Employees</NavLink> | <NavLink to="/projects">Projects</NavLink>
	            								<div className="content">
	            									<Route exact path="/" component={Employees}/>
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

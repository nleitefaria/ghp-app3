import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';

import Employees from './employees/Employees';
import Projects from './projects/Projects';
import ProjectsOfEmployee from './projects/ProjectsOfEmployee';
import EmployeesOfProject from './employees/EmployeesOfProject';
import Other from './other/Other';
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
																<Route path="/employees/project/:id" component={EmployeesOfProject}/>
	            									<Route exact path="/projects" component={Projects}/>
																<Route path="/projects/employee/:id" component={ProjectsOfEmployee}/>
	            									<Route exact path="/other" component={Other}/>
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

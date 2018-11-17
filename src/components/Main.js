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
import ProjectsOfEmployee from './ProjectsOfEmployee';
import Other from './Other';
import Header from './Header';

import axios from 'axios';

const URL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/employees/count'

class Main extends Component
{
	constructor(props)
    {
        super(props);

        this.state =
        {
            count: 0,
        };
    }

	componentDidMount()
	{

      this.loadData();

	}

	loadData()
	{
		axios.get(URL).then(res =>
		{
			const rd = res.data;
			this.setState( {count: rd} );
			this.setState( {loading: false} );
		})
	}


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

import React from 'react';
import axios from 'axios';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';

import './Other.css';

import Users from './Users';
import Todos from './Todos';
import Loading from './../Loading';
import { OtherProvider } from "../../context/OtherContext";

const apiURL = 'https://jsonplaceholder.typicode.com/'

class Other extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state =
		 {
       activeTab: '1',
       loading : true,
       todoName: "Todo 1",
       users: [],
       columnsOfUsers: [
           { name: 'id', title: 'ID' },
           { name: 'name', title: 'Name' },
           { name: 'username', title: 'Username' },
           { name: 'email', title: 'Email' },
           { name: 'phone', title: 'Phone' }
       ],

       todos: [],
       columnsOfTodos: [
           { name: 'id', title: 'ID' },
           { name: 'title', title: 'Title' }
       ],
       otherDoStuffForUsers: () => this.doStuffForUsers(),
       otherDoStuffForTodos: () => this.doStuffForTodos()
     };

     this.toggle = this.toggle.bind(this);
  }

  doStuffForUsers()
  {
    alert("Doing stuff ... for Users");
  }

  doStuffForTodos()
  {
    alert("Doing stuff ... for Todos");
  }

  getUsers()
  {
    axios.get(apiURL + 'users').then(res =>
      {
        const rd = res.data;
        this.setState( {users: rd} );
        this.setState( {loading: false} );
      })
  }

  getTodos()
  {
    axios.get(apiURL + 'todos').then(res =>
      {
        const rd = res.data;
        this.setState( {todos: rd} );
        this.setState( {loading: false} );
      })
  }

  toggle(tab)
  {
     if (this.state.activeTab !== tab)
     {
       this.setState({
         activeTab: tab
       });
     }
  }

  componentDidMount()
  {
    this.getUsers();
    this.getTodos();
  }

  render()
  {
	  const { loading } = this.state;

    return (
      <div>
      <br></br>
        <Breadcrumb>
        	<BreadcrumbItem active>Other (Context API)</BreadcrumbItem>
        </Breadcrumb>
        <br></br>
        <Nav tabs>
        	<NavItem>
        		<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }} >
        			Users
        		</NavLink>
        	</NavItem>
        	<NavItem>
        		<NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }} >
        			Todos
        		</NavLink>
        	</NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        	<TabPane tabId="1">
        		<Row>
        			<Col sm="12">
        				<OtherProvider value={this.state}>
        					<br></br>
        						<Row>
        							<Col xs="6"><div className="divLoading">{loading && <Loading />}</div></Col>
        						</Row>
        					<Users />
        				</OtherProvider>
        			</Col>
        		</Row>
        	</TabPane>
        	<TabPane tabId="2">
        		<Row>
        			<Col sm="12">
        				<OtherProvider value={this.state}>
        				<br></br>
        						<Row>
        							<Col xs="6"><div className="divLoading">{loading && <Loading />}</div></Col>
        						</Row>
        				<Todos />
        			</OtherProvider>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
    );
  }
}

export default Other;

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';

import Users from './Users';
import { OtherProvider } from "../context/OtherContext";

class Other extends React.Component
{

  constructor(props)
  {
     super(props);
     this.state = {
       activeTab: '1',
       firstName: "Henri",
       lastName: "Matisse"
     };
     this.toggle = this.toggle.bind(this);
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
   }

   render()
   {
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
        					<Users />
        				</OtherProvider>
        			</Col>
        		</Row>
        	</TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              Todos
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
    );
   }
}

export default Other;

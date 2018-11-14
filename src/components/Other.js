import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';

import Users from './Users';
import Todos from './Todos';

//First we will make a new context
const OtherContext = React.createContext();

//Then we create the provider Component
class OtherContextProvider extends React.Component
{
  state =
  {
    name: "Wes",
    age: 20,
  }

  render()
  {
    return (
      <OtherContext.Provider value={{
                                      state: this.state,
                                      //growAYearOlder : () => this.setState({
                                      //age: this.state.age + 1
                                      //})
      }}>
        {this.props.children}
      </OtherContext.Provider>
   )
  }
}

class Other extends React.Component
{
  constructor(props)
 {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       activeTab: '1'
     };
   }

   toggle(tab) {
     if (this.state.activeTab !== tab) {
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
          <OtherContextProvider>
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
                  <Users></Users>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Todos></Todos>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          </OtherContextProvider>         
       </div>
     );
   }
}

export default Other;

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import classnames from 'classnames';


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
                 A
               </Col>
             </Row>
           </TabPane>
           <TabPane tabId="2">
             <Row>
               <Col sm="12">
                 B
               </Col>
             </Row>
           </TabPane>
         </TabContent>
       </div>
     );
   }
}

export default Other;

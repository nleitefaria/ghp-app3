import React from 'react';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import { OtherConsumer } from "../context/OtherContext";

class Users extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      columns: [
        { name: 'id', title: 'ID' },
        { name: 'name', title: 'Name' },  
        { name: 'username', title: 'Username' },   
        { name: 'email', title: 'Email' },   
        { name: 'phone', title: 'Phone' }          
      ],
      rows: [],
      loading: true,
    };
  }
  
  render() 
  {
    const { rows, columns, loading } = this.state;

    return (
      <div>
        <br></br>
        <OtherConsumer>
        {
          context =>
            <React.Fragment>
              <br></br>
              <Card>
                <Grid rows={context.users} columns={columns} >
                    <Table />
                        <TableHeaderRow />
                </Grid>
              </Card>
              <br></br>
              <button type="submit" onClick={(e) => context.otherDoStuff()}>Do Stuff in parent</button>  
            </React.Fragment>
        }
        </OtherConsumer>
      </div>
    );
  }
}

export default Users;

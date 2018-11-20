import React from 'react';

import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import { OtherConsumer } from "../../context/OtherContext";

class Users extends React.Component
{
  render()
  {
    return (
      <div>
        <OtherConsumer>
        {
          context =>
            <React.Fragment>
              <br></br>
              <Card>
                <Grid rows={context.users} columns={context.columnsOfUsers} >
                    <Table />
                        <TableHeaderRow />
                </Grid>
              </Card>
              <br></br>
              <button type="submit" onClick={(e) => context.otherDoStuffForUsers()}>Do Stuff in parent</button>
            </React.Fragment>
        }
        </OtherConsumer>
      </div>
    );
  }
}

export default Users;

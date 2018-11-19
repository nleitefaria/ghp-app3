import React from 'react';

import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import { OtherConsumer } from "../../context/OtherContext";

class Todos extends React.Component
{
   render()
   {
      return (
         <div>
            <br></br>
               <OtherConsumer>
               {
                  context =>
                     <React.Fragment>
                        <br></br>
                        <Card>
                           <Grid rows={context.todos} columns={context.columnsOfTodos} >
                              <Table />
                                 <TableHeaderRow />
                           </Grid>
                        </Card>
                        <br></br>
                        <button type="submit" onClick={(e) => context.otherDoStuffForTodos()}>Do Stuff in parent</button>
                     </React.Fragment>
               }
               </OtherConsumer>
         </div>
      );
   }
}

export default Todos;

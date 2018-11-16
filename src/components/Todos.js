import React from 'react';

import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import { OtherConsumer } from "../context/OtherContext";

class Todos extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state =
      {
         columns: [
            { name: 'id', title: 'ID' },
            { name: 'title', title: 'Title' },
            { name: 'allocation', title: 'Allocation' }
         ],
         //rows: [],
         //loading: true,
      };
   }

   render() 
   {
      const { columns } = this.state;

      return (
         <div>
            <br></br>
               <OtherConsumer>
               {
                  context =>
                     <React.Fragment>
                        <br></br>
                        <Card>
                           <Grid rows={context.todos} columns={columns} >
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
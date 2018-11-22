import React from 'react';

import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-bootstrap4';
import { SelectionState } from '@devexpress/dx-react-grid';

import { OtherConsumer } from "../../context/OtherContext";

class Todos extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      selection: [],
    };
  }

  changeSelection = selection => this.setState({ selection });

  getRowId(row) {
    return row.id;
  }

  render()
  {
    var { selection } = this.state;
    var selTemp = [];
    selTemp.push(selection.slice(-1).pop());
    selection = selTemp;

    return (
      <div>
        <OtherConsumer>
        {
          context =>
            <React.Fragment>
              <br></br>
              <Card>
                <Grid rows={context.todos} columns={context.columnsOfTodos} getRowId={this.getRowId}>
                  <SelectionState selection={selection} onSelectionChange={this.changeSelection} />
                    <Table />
                      <TableHeaderRow />
                        <TableSelection selectByRowClick highlightRow showSelectionColumn={false} />
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

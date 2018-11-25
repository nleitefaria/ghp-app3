import React from 'react';
import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

class ProjectsOfEmployeeAddModalTable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      columns: [
        { name: 'project', title: 'Project' },
        { name: 'alocation', title: 'Alocation' }
      ],
      rows: [{project : 'p1_mockado', alocation:100}]
    };
  }

  /*
  componentDidMount()
  {
      this.loadData();
  }

  loadData()
  {

      axios.get(apiURL + 'projects').then(res =>
      {
        const rd = res.data;
        this.setState( {rows: rd} );
        this.setState( {loading: false} );
      })

  }
  */

  render()
  {
    const { rows, columns } = this.state;
    return (
      <Card>
        <Grid rows={rows} columns={columns} >
          <Table />
          <TableHeaderRow />
        </Grid>
      </Card>
    );
  }
}

export default ProjectsOfEmployeeAddModalTable;

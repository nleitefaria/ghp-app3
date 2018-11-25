import React from 'react';
import axios from 'axios';

import { Card } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class ProjectsOfEmployeeAddModalTable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      columns: [
        { name: 'name', title: 'Project' },
        { name: 'allocation', title: 'Allocation' }
      ],
      rows: []
    };
  }

  componentDidMount()
  {
      this.loadData(this.props.id);
  }

  loadData(id)
  {
      axios.get(apiURL + 'projects/employee/' + id).then(res =>
      {
        const rd = res.data;
        this.setState( {rows: rd} );
        this.setState( {loading: false} );
      })
  }

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

import React from 'react';
import axios from 'axios';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesDeleteModal from './EmployeesDeleteModal';
import ProjectsLink from './../projects/ProjectsLink';
import Loading from '../Loading';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

const ActionCell = ({ id }) => (
  <Table.Cell>
      <table>
        <tr>
          <td><EmployeesEditModal id={id}></EmployeesEditModal></td>
          <td><EmployeesDeleteModal id={id}></EmployeesDeleteModal></td>
          <td><ProjectsLink id={id}/></td>
        </tr>
      </table>
  </Table.Cell>
);

const Cell = (props) => {
  const { column, row } = props;
  if (column.name === 'action') {
    return <ActionCell  id={row.id} />;
  }
  return <Table.Cell {...props} />;
};

class Employees extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            columns: [
                { name: 'name', title: 'Name' },
                { name: 'startDate', title: 'Start Date' },
                { name: 'role', title: 'Role', width: 20 },
                { name: 'platoon', title: 'Platoon' },
                { name: 'action', title: 'Action'}
            ],
						tableColumnExtensions: [
        				{ columnName: 'action', width: 100 }
      			],
            rows: [],
            loading: true,
        };
    }

    componentDidMount()
	  {
        this.loadData();
	  }

    loadData()
    {
      axios.get(apiURL + 'employees').then(res =>
      {
        const rd = res.data;
        this.setState( {rows: rd} );
        this.setState( {loading: false} );
      })
    }

    render()
    {
      const { rows, columns, tableColumnExtensions, loading } = this.state;

      return (
         <div>
         <br></br>
         <Breadcrumb>
           <BreadcrumbItem active>Employees</BreadcrumbItem>
         </Breadcrumb>
         <br></br>
            <Container>
                <Row>
                    <Col xs="1"><EmployeesAddModal></EmployeesAddModal></Col>
                </Row>
                <Row>
                    <Col xs="6"><div className="divLoading">{loading && <Loading />}</div></Col>
                </Row>
            </Container>
            <br></br>
            <Card>
                <Grid rows={rows} columns={columns} >
                    <Table cellComponent={Cell} columnExtensions={tableColumnExtensions}/>
                        <TableHeaderRow />
                </Grid>
            </Card>
         </div>
      );
   }
}

export default Employees;

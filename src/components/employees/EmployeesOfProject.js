import React from 'react';
import axios from 'axios';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import './Employees.css';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesDeleteModal from './EmployeesDeleteModal';
import ProjectsLink from './../projects/ProjectsLink';
import Loading from '../Loading';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

const ActionCell = ({ id }) => (
  <Table.Cell>
    <span>
      <div>
       <div><ProjectsLink id={id}/></div>
      </div>
    </span>
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
      var id = window.location.href.split('/')[window.location.href.split('/').length - 1];
      this.loadEmployeesForProject(id);
		}

    loadEmployeesForProject(id)
    {
        axios.get(apiURL + "employees/project/" + id).then(res =>
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
         <Container>
         	<Row>
         		<Col xs="6"><div className="divLoading">{loading && <Loading />}</div></Col>
         	</Row>
         </Container>
         <Container>
            <Row>
              <Col xs="1"><EmployeesAddModal></EmployeesAddModal></Col>
              <Col xs="1">
                 <div className="divStyleInner">
                   <EmployeesEditModal id='1'></EmployeesEditModal>
                 </div>
              </Col>
              <Col xs="1">
                 <div className="divStyleInner">
                   <EmployeesDeleteModal id='1'></EmployeesDeleteModal>
                 </div>
              </Col>
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

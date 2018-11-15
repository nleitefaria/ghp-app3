import React from 'react';
import axios from 'axios';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesDeleteModal from './EmployeesDeleteModal';
import ProjectsLink from './ProjectsLink';
import Loading from './Loading';

const URL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/employees'

var divStyleOutter = {
  'width': '300px'
};

var divStyleInner = {
  'float': 'left', 'width': '80px'
};

var divStyleInnerLink = {
  'float': 'left', 'width': '80px', 'paddingTop': '5px', 'paddingLeft': '10px'
};

var divLoading = {
  'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

const ActionCell = ({ id }) => (
  <Table.Cell>
    <span>
      <div style={divStyleOutter}>
       <div style={divStyleInner}><EmployeesEditModal id={id}></EmployeesEditModal></div>
       <div style={divStyleInner}><EmployeesDeleteModal id={id}></EmployeesDeleteModal></div>
       <div style={divStyleInnerLink}><ProjectsLink id={id}/></div>
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
        this.loadData();
	  }

    loadData()
    {
      axios.get(URL).then(res =>
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
                    <Col xs="6"><div style={divLoading}>{loading && <Loading />}</div></Col>
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

import React from 'react';
import axios from 'axios';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import './Projects.css';

import ProjectsAddModal from './ProjectsAddModal';
import EmployeesLink from './../employees/EmployeesLink';
import Loading from './../Loading';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

const ActionCell = ({ id }) => (
		  <Table.Cell>
				<div className="divStyleOutter">
         <div className="divStyleInnerLink"><EmployeesLink id={id}/></div>
		    </div>
		  </Table.Cell>
);

const Cell = (props) => {
	const { column, row } = props;

	if (column.name === 'action')
	{
		return <ActionCell  id={row.id} />;
	}
	return <Table.Cell {...props} />;

};

class ProjectsOfEmplyees extends React.Component
{
	constructor(props)
    {
        super(props);

        this.state =
        {
            columns: [
                { name: 'name', title: 'Name'},
                { name: 'allocation', title: 'Allocation' },
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
      this.loadProjectsForEmployee(id);
		}

    loadProjectsForEmployee(id)
    {
        axios.get(apiURL + "projects/employee/" + id).then(res =>
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
          <BreadcrumbItem active>Projects</BreadcrumbItem>
        </Breadcrumb>
        <Container>
         <Row>
           <Col xs="6"><div className="divLoading">{loading && <Loading />}</div></Col>
         </Row>
        </Container>
         <Container>
             <Row>
                 <Col xs="1"><ProjectsAddModal></ProjectsAddModal></Col>
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

export default ProjectsOfEmplyees;

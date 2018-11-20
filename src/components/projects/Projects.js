import React from 'react';
import axios from 'axios';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import ProjectsAddModal from './ProjectsAddModal';
import ProjectsDeleteModal from './ProjectsDeleteModal';
import EmployeesLink from './../employees/EmployeesLink';
import Loading from './../Loading';

const URL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/projects'

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
				<div style={divStyleOutter}>
				 <div style={divStyleInner}><ProjectsDeleteModal></ProjectsDeleteModal></div>
         <div style={divStyleInnerLink}><EmployeesLink id={id}/></div>
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

class Projects extends React.Component
{
	constructor(props)
    {
        super(props);

        this.state =
        {
            columns: [
                { name: 'name', title: 'Name'},
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
          <BreadcrumbItem active>Projects</BreadcrumbItem>
        </Breadcrumb>
        <Container>
     		<Row>
     			<Col xs="6"><div style={divLoading}>{loading && <Loading />}</div></Col>
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

export default Projects;

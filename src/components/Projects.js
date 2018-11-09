import React from 'react';

import { Card, Container, Row, Col} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import ProjectsAddModal from './ProjectsAddModal';
import ProjectsDeleteModal from './ProjectsDeleteModal';
import EmployeesLink from './EmployeesLink';

const ActionCell = ({ id }) => (
		  <Table.Cell>
		    <span>
				<Row>
				<Col xs="2"><EmployeesLink id={id}/></Col>
				<Col xs="2"><ProjectsDeleteModal></ProjectsDeleteModal></Col>
		        </Row>
		    </span>
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
                { name: 'name', title: 'Name' },              
                { name: 'action', title: 'Action'}
            ],
            rows: [],
        };

    }
	
    componentDidMount()
	{
    	this.loadData();
	}
    
    loadData()
    {
        const data =  [
          {"id": 1, "name": "Project 1"},
          {"id": 2, "name": "Project 2"},
          {"id": 3, "name": "Project 3"},
          {"id": 4, "name": "Project 4"}
        ];

        this.setState({
          rows: data,
        })
    }
		
   render() {
	   
	   const { rows, columns } = this.state;
	   
      return (
         <div>
         <br></br>
         <Container>
             <Row>
                 <Col xs="1"><ProjectsAddModal></ProjectsAddModal></Col>
             </Row>
         </Container>
         <br></br>
         <Card>
             <Grid rows={rows} columns={columns} >
                 <Table cellComponent={Cell}/>
                     <TableHeaderRow />
             </Grid>
         </Card>
         </div>
      );
   }
}

export default Projects;

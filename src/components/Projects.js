import React from 'react';

import { Card, Container, Row, Col} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import ProjectsAddModal from './ProjectsAddModal';
import ProjectsDeleteModal from './ProjectsDeleteModal';
import EmployeesLink from './EmployeesLink';

var divStyleOutter = {
  'width': '300px'
};

var divStyleInner = {
  'float': 'left', 'width': '80px'
};

var divStyleInnerLink = {
  'float': 'left', 'width': '80px', 'paddingTop': '5px', 'paddingLeft': '10px'
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

   	render()
		{
	   	const { rows, columns, tableColumnExtensions } = this.state;

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
                 <Table cellComponent={Cell} columnExtensions={tableColumnExtensions}/>
                     <TableHeaderRow />
             </Grid>
         </Card>
         </div>
      );
   }
}

export default Projects;

import React from 'react';

import { Card, Container, Row, Col} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';

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
                { name: 'role', title: 'Role' },
                { name: 'platoon', title: 'Platoon' },
                { name: 'action', title: 'Action' },
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
        alert('Will call API');
    }
    
   render() {

    const { rows, columns } = this.state;

      return (
         <div>
            <br></br>
            <h1>Employees</h1>
            <br></br>
            <Container>
                <Row>
                    <Col xs="1"><EmployeesAddModal></EmployeesAddModal></Col>
                    <Col xs="1"><EmployeesEditModal></EmployeesEditModal></Col>
                    <Col xs="1">.col</Col>
                </Row>
            </Container>           
            <br></br>
            <Card>
                <Grid rows={rows} columns={columns} >
                    <Table />
                        <TableHeaderRow />
                </Grid>
            </Card>
         </div>
      );
   }
}

export default Employees;

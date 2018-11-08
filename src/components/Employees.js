import React from 'react';

import { Card, Container, Row, Col} from 'reactstrap';
import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesDeleteModal from './EmployeesDeleteModal';
import ProjectsLink from './ProjectsLink';

const ActionCell = ({ id }) => (
  <Table.Cell>
    <span>
		<Row>
            <Col xs="1"><ProjectsLink id={id}/></Col>
            <Col xs="2"><EmployeesEditModal id={id}></EmployeesEditModal></Col>
            <Col xs="2"><EmployeesDeleteModal id={id}></EmployeesDeleteModal></Col>
        </Row>
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
          {"id": 1, "name": "Joe Dassin", "startDate": "01/01/2000","role": "PE", "platoon": "Splinkers"},
          {"id": 2, "name": "Serge Amie", "startDate": "01/02/2000","role": "SE", "platoon": "Super Prozoides"},
          {"id": 3, "name": "Albert Curie", "startDate": "01/02/2000","role": "SE", "platoon": "Awesome"},
          {"id": 4, "name": "Virginie Danon", "startDate": "01/02/2001","role": "SE", "platoon": "Hyper"},
        ];

        this.setState({
          rows: data,
        })
    }

    render()
    {
      const { rows, columns } = this.state;

      return (
         <div>
            <br></br>
            <Container>
                <Row>
                    <Col xs="1"><EmployeesAddModal></EmployeesAddModal></Col>
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

export default Employees;

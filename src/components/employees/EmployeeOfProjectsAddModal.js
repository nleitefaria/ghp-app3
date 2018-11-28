import React from 'react';
import axios from 'axios';

import { Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-bootstrap4';
import { Button, Card, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'
	
class EmployeeOfProjectsAddModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal: false,
      name: '',
      columns: [
          { name: 'name', title: 'Project' },
          { name: 'allocation', title: 'Allocation' }
      ],
      rows: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() 
  {	  
	  if(this.state.modal === false)
	  {
		  this.loadData(this.props.id);
	  }	  
	  this.setState({
		  modal: !this.state.modal
	  });
  }

  handleChange (event) {
      this.setState({
          name: event.target.value
      })
  }
  
  loadData(id)
  {
      axios.get(apiURL + 'employees/project/' + id).then(res =>
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
      <div>
        <Button color="link" onClick={this.toggle}>Employees</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Project Employees</ModalHeader>
          <ModalBody>
          	<Card>
          		<Grid rows={rows} columns={columns} >
          			<Table />
          				<TableHeaderRow />
          		</Grid>
          	</Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EmployeeOfProjectsAddModal;

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class EmployeesDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.state.modal === false)
    {
      this.loadData(this.props.id);
    }

    this.setState({
      modal: !this.state.modal
    });
  }

  loadData(id)
  {
    axios.get(apiURL + 'employee/' + id).then(res =>
    {
      const rd = res.data;
      this.setState( {name: rd.name} );
    })

  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete Employee</ModalHeader>
          <ModalBody>
            Are you sure you want to delete employee {this.state.name} <br></br>
            and his allocation to projects?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EmployeesDeleteModal;

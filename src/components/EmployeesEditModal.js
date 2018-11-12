import React from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const URL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/employee'

class EmployeesEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      employee : {}
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

  componentDidMount()
  {
  }

  loadData(id)
  {
    alert(id);
    axios.get(URL + '/' + id).then(res =>
    {
      const rd = res.data;
      this.setState( {employee: rd} );
    })

  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit {this.props.id}</ModalHeader>
          <ModalBody>
            EDIT TODO
            <br></br>
            {this.state.employee.name}

            <br></br>

            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label><b>Name:</b></Label>
                <Input type="text" value={this.state.employee.name} />
              </FormGroup>
            </form>








          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EmployeesEditModal;

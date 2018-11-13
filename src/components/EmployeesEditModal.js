import React from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class EmployeesEditModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal: false,
      platoons: [],
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

  loadPlatoons()
  {
    axios.get(apiURL + 'platoons').then(res =>
    {
      const rd = res.data;
      this.setState( {platoons: rd} );
      this.setState( {loading: false} );
    })

  }

  componentDidMount()
  {
    this.loadPlatoons();
  }

  loadData(id)
  {
    axios.get(apiURL + 'employee/' + id).then(res =>
    {
      const rd = res.data;
      this.setState( {employee: rd} );
    })

  }

  render()
  {
    let platoons = this.state.platoons;
    let optionItems = platoons.map((platoon) =>
      <option key={platoon.id}>{platoon.name}</option>
    );


    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit {this.state.employee.name} data</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label><b>Name:</b></Label>
                <Input type="text" name="name" id="name" value={this.state.employee.name} />
              </FormGroup>
              <FormGroup>
                <Label><b>Date:</b></Label>
                <Input type="date" name="date" id="date" value={this.state.employee.startDate} />
              </FormGroup>
              <FormGroup>
                <Label><b>Platoon:</b></Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Please select one</option>
                    {optionItems}
                  </Input>
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

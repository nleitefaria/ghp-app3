import React from 'react';
import axios from 'axios';
import { FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class EmployeesAddModal extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      platoons: [],
      name: ''

    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange (event) {
      this.setState({
          name: event.target.value
      })
  }

  handleSubmit (event) {
      //alert(this.state.name);
      this.toggle();
      alert(event.target.value);
      event.preventDefault();
  }

  addEmployee(event)
  {
    //this.toggle();
    //alert(event.target.value);
    //event.preventDefault();
    alert('ICI');


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

  render()
  {
    let platoons = this.state.platoons;
    let optionItems = platoons.map((platoon) =>
      <option key={platoon.id}>{platoon.name}</option>
    );

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><b>Add Employee</b></ModalHeader>
          <ModalBody>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label><b>Name:</b></Label>
                  <Input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label><b>Date:</b></Label>
                  <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label><b>Role:</b></Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}(none selected)
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}JE
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}PE
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}SE
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}TM
                      </Label>
                    </FormGroup>
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
            <Button type="submit" color="primary" onClick={this.addEmployee}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default EmployeesAddModal;

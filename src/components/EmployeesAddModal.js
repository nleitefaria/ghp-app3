import React from 'react';
import { FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class EmployeesAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
    //this.toggle;


  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
          <ModalBody>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label>Role</Label>
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
                  <Label>Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Please select one</option>
                      <option>Splinkers</option>
                      <option>Super Prozoides</option>
                      <option>Awesome</option>
                      <option>Hyper</option>
                    </Input>
                </FormGroup>





                <input type="submit" value="Submit"/>








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

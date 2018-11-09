import React from 'react';
import { FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ProjectsAddModal extends React.Component {
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
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Project</ModalHeader>
          <ModalBody>
          	<form onSubmit={this.handleSubmit}>
          		<FormGroup>
          			<Label>Name</Label>
          			<Input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
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

export default ProjectsAddModal;

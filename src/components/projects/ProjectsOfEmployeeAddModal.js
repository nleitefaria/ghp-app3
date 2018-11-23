import React from 'react';
import axios from 'axios';

import { FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ProjectsOfEmployeeAddModal extends React.Component {
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

  /*
  handleSubmit (event) {
      //alert(this.state.name);
      this.toggle();
      alert(event.target.value);
      event.preventDefault();
  }

  addEmployee(event)
  {
    //this.toggle();
    alert(event.target.value);
    alert('ICI');
    event.preventDefault();

  }*/

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event =>
  {
    event.preventDefault();

    const project = {
      name: this.state.name
    };

    axios.post(`https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/project`, { project })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert(res);
        alert(res.data);

      })
  }


  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Projects</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Project</ModalHeader>
          <ModalBody>
          	<form onSubmit={this.handleSubmit}>
          		<FormGroup>
          			<Label>Name of project</Label>
          			<Input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
          		</FormGroup>
              <button type="submit">Add Project</button>
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

export default ProjectsOfEmployeeAddModal;

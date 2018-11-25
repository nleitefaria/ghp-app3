import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProjectsOfEmployeeAddModalTable from './ProjectsOfEmployeeAddModalTable';

class ProjectsOfEmployeeAddModal extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal: false,
      name: ''

    };

    this.toggle = this.toggle.bind(this);
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

  render() {
    return (
      <div>
        <Button color="link" onClick={this.toggle}>Projects</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Employee projects</ModalHeader>
          <ModalBody>
            <ProjectsOfEmployeeAddModalTable></ProjectsOfEmployeeAddModalTable>
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

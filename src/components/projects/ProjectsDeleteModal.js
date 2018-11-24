import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class ProjectsDeleteModal extends React.Component
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

  toggle()
  {
    if(this.props.id !== '' && this.state.modal === false)
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
    axios.get(apiURL + 'project/' + id).then(res =>
    {
      const rd = res.data;
      this.setState( {name: rd.name} );
      this.setState( {loading: false} );
    })
  }

  render()
  {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Are you sure you want to delete {this.state.name}<br></br>
            and all the employees allocation to it?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Yes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProjectsDeleteModal;

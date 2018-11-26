import React from 'react';
import axios from 'axios';
import { Form, FormGroup, Col, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class EmployeesAddModal extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      platoons: [],
      employee: {
          name: '',
          date: '',
          role: '',
          platoon: ''        
        }

    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
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
  
  handleChange = async (event) => {
	    const { target } = event;
	    const value = target.value;
	    const { name } = target;
	    await this.setState({
	      [ name ]: value,
	    });
	  }
  
  submitForm(e) 
  {
	  e.preventDefault();
	  console.log(`Name: ${ this.state.name }`)
  }   

  render()
  {
	/*
    let platoons = this.state.platoons;
    let optionItems = platoons.map((platoon) =>
      <option key={platoon.id}>{platoon.name}</option>
    );
    */

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><b>Add Employee</b></ModalHeader>
          <ModalBody>
          
          
          
          
          <Form onSubmit={(e) => this.submitForm(e)}>
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" id="name" onChange={ (e) => {
                   
                    this.handleChange(e)
                  } }/>
              </FormGroup>
            </Col>
            
            <Button>Submit</Button>
          </Form>
        
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

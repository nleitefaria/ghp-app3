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
      name : '',
      date : '',
      role:''
    };

    this.toggle = this.toggle.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
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
  
  handleNameChange = async (event) => {
	    const { target } = event;
	    const value = target.value;	    
	    await this.setState({
	      name : value,
	    });
	  }
  
  handleDateChange = async (event) => {
	    const { target } = event;
	    const value = target.value;
	    await this.setState({
	      date : value,
	    });
	  }
  
  handleRoleChange = async (event) => {
	    const { target } = event;
	    const value = target.value;
	    await this.setState({
	      role : value,
	    });
	  }
  
  submitForm(e) 
  {
	  alert('@Submit form');
	  e.preventDefault();
	  console.log(`Name: ${ this.state.name }`)
	  console.log(`Date: ${ this.state.date }`)
	  console.log(`Role: ${ this.state.role }`)
	  this.toggle();
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
        <Form onSubmit={(e) => this.submitForm(e)}>
        	<ModalHeader toggle={this.toggle}><b>Add Employee</b></ModalHeader>
          <ModalBody>
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" id="name" onChange={ (e) => {                   
                    this.handleNameChange(e)
                  } }/>
              </FormGroup>            
              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" name="date" id="date" onChange={ (e) => {                   
                    this.handleDateChange(e)
                } } />
              </FormGroup>               
              <FormGroup> 
                <Label for="role">Role</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="role" value="" 
                    	onChange={ (e) => {                   
                            this.handleRoleChange(e)
                        } }
                    	/>
                    None selected
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="role" value="b"
                    	onChange={ (e) => {                   
                            this.handleRoleChange(e)
                        } }
                    	/>
                    JE
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="role" value="c"
                    	onChange={ (e) => {                   
                            this.handleRoleChange(e)
                        } }
                    	/>
                    PE
                  </Label>
                </FormGroup> 
                <FormGroup check>
                <Label check>
                  <Input type="radio" name="role" value="d"
                  	onChange={ (e) => {                   
                          this.handleRoleChange(e)
                      } }
                  	/>
                  SE
                </Label>
              </FormGroup>  
              <FormGroup check>
              <Label check>
                <Input type="radio" name="role" value="e"
                	onChange={ (e) => {                   
                        this.handleRoleChange(e)
                    } }
                	/>
                TM
              </Label>
            </FormGroup>  
                </FormGroup>
            </Col>
          </ModalBody>
          <ModalFooter>
          <Button color="primary">Submit</Button>          
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>       
      </div>
    );
  }
}

export default EmployeesAddModal;

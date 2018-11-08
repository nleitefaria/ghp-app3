mport React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class ButtonGroup extends React.Component
{
   render() {
      return (
         <div>
            <br></br>         
            <Container>   
                <Row>
                    <Col xs="1"><Button color="primary">Add</Button></Col>
                    <Col xs="1"><Button color="primary">Edit</Button></Col>
                    <Col xs="1"><Button color="primary">Delete</Button></Col>
                </Row>
            </Container>
         </div>
      );
   }
}

export default ButtonGroup;

import React from 'react';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Grid, Table, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-bootstrap4';
import { SelectionState } from '@devexpress/dx-react-grid';

import './Employees.css';

import EmployeesAddModal from './EmployeesAddModal';
import EmployeesEditModal from './EmployeesEditModal';
import EmployeesDeleteModal from './EmployeesDeleteModal';
import ProjectsLink from './../projects/ProjectsLink';
import Loading from '../Loading';
import { EmployeesConsumer } from "../../context/EmployeesContext";

const ActionCell = ({ id }) => (
		  <Table.Cell>
		    <span>
		      <div className="divStyleOutter">
		       <div><ProjectsLink id={id}/></div>
		      </div>
		    </span>
		  </Table.Cell>
);

const Cell = (props) => {
  const { column, row } = props;
  if (column.name === 'action') {
    return <ActionCell  id={row.id} />;
  }
  return <Table.Cell {...props} />;
};

class EmployeesContent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
        	selection: []
        };
    }

	changeSelection = selection => this.setState({ selection });

	getRowId(row) {
	   return row.id;
	}

    render()
    {
      const { tableColumnExtensions } = this.state;

			var { selection } = this.state;
	    var selTemp = [];
	    selTemp.push(selection.slice(-1).pop());
	    selection = selTemp;

      return (
    		  <div>
    	        <EmployeesConsumer>
    	        {
    	          context =>
    	            <React.Fragment>
    	            <br></br>
    	            <Breadcrumb>
    	              <BreadcrumbItem active>Employees</BreadcrumbItem>
    	            </Breadcrumb>
    	            <Container>
    	            	<Row>
    	            		<Col xs="6"><div className="divLoading">{context.loading && <Loading />}</div></Col>
    	            	</Row>
    	            </Container>
    	            <Container>
    	            	<div className="divLoading">
    	            	{
    	            		context.loading ||    	            		   	            			 	            			
    	                	<Row>
    	                    	<Col xs="1"><EmployeesAddModal></EmployeesAddModal></Col>
    	   							<Col xs="1">
    	   								<div className="divStyleInner">
    	   									<EmployeesEditModal id={selection}></EmployeesEditModal>
    	   								</div>
    	   							</Col>
    	   							<Col xs="1">
    	   								<div className="divStyleInner">
    	    								<EmployeesDeleteModal id={selection}></EmployeesDeleteModal>
    	    							</div>
    	    					</Col>
    	    				</Row>   	            		
    	            	}
    	                </div>
    	            </Container>
    	            <br></br>
    	            <Card>
    	            	<Grid rows={context.rows} columns={context.columns} getRowId={this.getRowId}>
    	   						<SelectionState selection={selection} onSelectionChange={this.changeSelection} />
    	            			<Table cellComponent={Cell} columnExtensions={tableColumnExtensions}/>
    	            				<TableHeaderRow />
    	   									<TableSelection selectByRowClick highlightRow showSelectionColumn={false} />
    	             </Grid>
    	            </Card>
    	            </React.Fragment>
    	        }
    	        </EmployeesConsumer>
    	      </div>
      );
   }
}

export default EmployeesContent;

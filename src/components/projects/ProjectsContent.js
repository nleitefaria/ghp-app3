import React from 'react';

import { Card, Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Grid, Table, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-bootstrap4';
import { SelectionState } from '@devexpress/dx-react-grid';

import './Projects.css';

import ProjectsAddModal from './ProjectsAddModal';
import EmployeesLink from './../employees/EmployeesLink';
import Loading from './../Loading';

import { ProjectsConsumer } from "../../context/ProjectsContext";


const ActionCell = ({ id }) => (
		  <Table.Cell>
				<div className="divStyleOutter">
         <div className="divStyleInnerLink"><EmployeesLink id={id}/></div>
		    </div>
		  </Table.Cell>
);

const Cell = (props) => {
	const { column, row } = props;

	if (column.name === 'action')
	{
		return <ActionCell  id={row.id} />;
	}
	return <Table.Cell {...props} />;

};

class ProjectsContent extends React.Component
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
            <ProjectsConsumer>
            {
              context =>
                <React.Fragment>
                <br></br>
                  <Breadcrumb>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                  </Breadcrumb>
                  <Container>
     		             <Row>
     			             <Col xs="6"><div className="divLoading">{context.loading && <Loading />}</div></Col>
     		             </Row>
     	            </Container>
                  <Container>
                  <Row>
                    <Col xs="1"><ProjectsAddModal></ProjectsAddModal></Col>
                  </Row>
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
            </ProjectsConsumer>
        </div>
      );
   }
}

export default ProjectsContent;

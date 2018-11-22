import React from 'react';
import axios from 'axios';

import ProjectsContent from './ProjectsContent';
import { ProjectsProvider } from "../../context/ProjectsContext";

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'

class Projects extends React.Component
{
  constructor(props)
  {
       super(props);
       this.state =
       {
           columns: [
               { name: 'name', title: 'Name'},
               { name: 'action', title: 'Action'}
           ],
           tableColumnExtensions: [
               { columnName: 'action', width: 100 }
           ],
           rows: [],
           loading: true
       };
  }

  componentDidMount()
  {
      this.loadData();
  }

  loadData()
  {
      axios.get(apiURL + 'projects').then(res =>
      {
        const rd = res.data;
        this.setState( {rows: rd} );
        this.setState( {loading: false} );
      })
  }

  render()
  {
    return (
        <div>
          <ProjectsProvider value={this.state}>
            <ProjectsContent />
          </ProjectsProvider>
        </div>
    );
  }
}

export default Projects;

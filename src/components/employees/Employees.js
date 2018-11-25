import React from 'react';
import axios from 'axios';

import EmployeesContent from './EmployeesContent';
import { EmployeesProvider } from "../../context/EmployeesContext";

const apiURL = 'https://sec-os-app3.7e14.starter-us-west-2.openshiftapps.com/'
	
class Employees extends React.Component
{
	constructor(props)
    {
        super(props);
        this.state =
        {
            columns: [
                { name: 'name', title: 'Name' },
                { name: 'startDate', title: 'Start Date' },
                { name: 'role', title: 'Role', width: 20 },
                { name: 'platoon', title: 'Platoon' },
                { name: 'action', title: 'Action'}
            ],
						tableColumnExtensions: [
						{ columnName: 'startDate', width: 10 },
        				{ columnName: 'action', width: 10 }
      			],
            rows: [],
            loading: true,
        };
    }
	
	componentDidMount()
	{
      this.loadData();
	}

	loadData()
	{
		axios.get(apiURL + 'employees').then(res =>
		{
			const rd = res.data;
			this.setState( {rows: rd} );
			this.setState( {loading: false} );
		})
	}

    render()
    {
    	return(
    		<div>
    			<EmployeesProvider value={this.state}>			
    				<EmployeesContent />
    			</EmployeesProvider>
    		</div>
    	);
    }
}

export default Employees;

import React from 'react';

import Users from './Users';
import { OtherProvider } from "../context/OtherContext";

class Other extends React.Component
{

  constructor(props)
  {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       activeTab: '1',
       firstName: "Andreas",
       lastName: "Sanchez"
     };
  }

  toggle(tab)
  {
     if (this.state.activeTab !== tab)
     {
       this.setState({
         activeTab: tab
       });
     }
   }

   componentDidMount()
   {
   }








   render()
   {
     return (
      <div>
      <br></br>
        OTHER
        <OtherProvider value={this.state}>
          <Users />
        </OtherProvider>
      </div>
    );
   }
}

export default Other;

import React from 'react';

import Users from './Users';
import { OtherProvider } from "./OtherContext";

class Other extends React.Component
{
  state = {
    firstName: "Andreas",
    lastName: "Sanchez"
  };

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

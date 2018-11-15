import React from 'react';

import { OtherConsumer } from "../context/OtherContext";

class Users extends React.Component
{
  render() {
    return (
      <div>
        <br></br>
        <OtherConsumer>
        {
          context =>
            <React.Fragment>
              <p><b>First name:</b> {context.firstName}</p>
              <p><b>Last name:</b> {context.lastName}</p>
            </React.Fragment>
        }
        </OtherConsumer>
      </div>
    );
  }
}

export default Users;

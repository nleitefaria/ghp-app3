import React from 'react';

import OtherContextProvider from '../providers/OtherContextProvider';

class Users extends React.Component
{
   render() {
      return (
         <div>
            <br></br>
            Users
            <br></br>
            <OtherContextProvider.Consumer>
            {
              (context) => (
                <React.Fragment>
                  ICI
                </React.Fragment>
              )
            }
            </OtherContextProvider.Consumer>

         </div>
      );
   }
}

export default Users;

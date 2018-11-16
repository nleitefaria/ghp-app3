import React from 'react';

import { OtherConsumer } from "../context/OtherContext";

class Todos extends React.Component
{
   render() {
      return (
         <div>
            Todos:
            <br></br>
            <OtherConsumer>
            {
               context =>
               <React.Fragment>
                  <p><b>Todo name:</b> {context.todoName}</p>
               </React.Fragment>
        }
        </OtherConsumer>
      </div>
      );
   }
}

export default Todos;

import React from 'react';

const OtherContext = React.createContext();

class OtherContextProvider extends React.Component
{
  state =
  {
    name: "Wes",
    age: 20,
  }

  render()
  {
    return (
      <OtherContext.Provider value={{
                                      state: this.state,
                                      //growAYearOlder : () => this.setState({
                                      //age: this.state.age + 1
                                      //})
                                    }}>
                                    {this.props.children}
      </OtherContext.Provider>
   )
  }
}

export default OtherContextProvider;

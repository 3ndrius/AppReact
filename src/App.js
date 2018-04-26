import React, { Component } from 'react';


class App extends Component {

constructor() {
  super();
  this.state = {
    number: 0
  }; 
}
click = () => {
  this.setState({
    number: this.state.number+1
  });
}
  render() {
    return (
      <div className="App">
      
      <p onClick={this.click}> Hello </p>
      <p> {this.state.number}</p>
      </div>
    );
  }//end render



}//end component

export default App;

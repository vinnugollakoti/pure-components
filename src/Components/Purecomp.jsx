import React, { PureComponent } from "react";

class MyPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      toggle: false
    };
  }
  handleCounter = () => {
    if (this.state.toggle == true) {
        this.setState((e) => ({
            value: e.value + 1
          }));
      
          console.log("pure component")
    }
  };
  handlertoggle = () => {
    this.setState(() => ({
        toggle: !this.state.toggle
      }));
  }
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handlertoggle}>toggle</button> 
        <button  onClick={this.handleCounter}>counter</button>
      </div>
    );
  }
}

export default MyPureComponent;

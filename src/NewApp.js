import React, { Component } from "react";
import ReactDOM from "react-dom";

class NewApp extends Component {
  //   state = {};

  helloworld = () => {
    console.log();
  };

  render() {
    return (
      <div>
        {this.helloworld}
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default NewApp;



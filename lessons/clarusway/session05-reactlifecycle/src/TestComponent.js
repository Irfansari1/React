import React, { Component } from "react";
var myT;

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    //Do not call this.setState() here!
    this.state = {
      name: "Irfan",
      color: "yellow",
      count: 0,
    };
    console.log("Hello from TestComponent constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "Hello from TestComponent constructor getDerivedStateFromProps"
    );
    //console.log("Props:", props);
    console.log("state:", state);
    return null; //we added a new object and change one of them to here and we can see in componentDidMount part
  }

  componentDidMount() {
    console.log("Hello from TestComponent constructor componentDidMount");
    //console.log(this.state);
    myT = setTimeout(() => {
      this.setState({ count: this.state.count + 1 }); // we can stop it in componentWillUnmount
    }, 3000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return this.state.count < 3 ? true : false; //true is the default value if we assign false it neeeds to check the number or the info
  }
  //Although componentDidMount is called BEFORE render it is showed up in console AFTER render

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Hello from componentDidUpdate");
    console.log("PrevProps:", prevProps);
    console.log("PrevState:", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearTimeout(myT);
  }

  incHandleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decHandleClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("Hello from TestComponent Render");
    return (
      <div>
        <p>This is a Class component</p>
        <p>{this.state.count}</p>
        <button onClick={this.decHandleClick}>Decrease</button>
        <button onClick={this.incHandleClick}>Increase</button>
      </div>
    );
  }
}

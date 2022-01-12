import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/400",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /*   styles = {
    fontSize: 30,
    fontWeight: "bold",
  }; */

  render() {
    return (
      //className="d-flex flex-column justify-content-center align-items-center m-2"
      // && bundan dolayi boolean ve string karsilatiriliyor ve ilk kisim true ikinci kisim truthy ise ikincisini seciyor...
      //condition imizi yazdirdik ardindan sonuc
      <div>
        {this.state.tags.length === 0 && "Plesae create a new tag!"}
        {this.renderTags()}
        {/* <img
          className="rounded mx-auto d-block"
          src={this.state.imageUrl}
          alt=""
        /> */}
        {/*   <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
      </div>
    );
  }

  /*   getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  } */
}

export default Counter;

//we can write any js expression {2+2}
//instead of div we can use '<React.Fragment>''

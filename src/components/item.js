import React from "react";
import path from "path";
import "../style/style.css";
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default",
      price: 0,
      pictureAddress: "./placeholder.jpeg",
    };
  }
  render() {
    return (
      <div className="item-component">
        <img
          className="image item-image"
          src={require(this.state.pictureAddress)}
          alt="item"
        />
        <h4 className="label item-label">{this.state.name}</h4>
        <h5 className="label item-price-label">${this.state.price}</h5>
      </div>
    );
  }
}

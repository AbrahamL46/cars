// src/components/CarView.jsx
import React, { Component } from 'react';
import { CAR_RAD, CAR_PAD } from '../utils/constants.js';

// This component expects the props:
//     x, y -- upper left corner of the component
//     wid, hgt -- size of the component
//     color -- color of the component
//     idNum -- car id for game logic
//     cars -- carsGame instance
class CarView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const el = e.currentTarget;
    const ox = e.nativeEvent.offsetX;
    const oy = e.nativeEvent.offsetY;
    const w = el.clientWidth;
    const h = el.clientHeight;
    const horizontal = this.props.wid >= this.props.hgt;
    let dir;
    if (horizontal) {
      dir = ox < w / 2 ? 3 : 2;
    } else {
      dir = oy < h / 2 ? 0 : 1;
    }
    this.props.cars.moveCar(this.props.idNum, dir);
  }

  render() {
    const myStyle = {
      top: this.props.y + CAR_PAD,
      left: this.props.x + CAR_PAD,
      width: this.props.wid - 2 * CAR_PAD - 2,
      height: this.props.hgt - 2 * CAR_PAD - 2,
      background: this.props.color,
      borderWidth: 1,
      borderColor: '#666666',
      borderStyle: 'solid',
      borderRadius: CAR_RAD,
      position: 'absolute',
      zIndex: 2,
      cursor: 'pointer',
    };
    return <div style={myStyle} onClick={this.handleClick} />;
  }
}
export default CarView;

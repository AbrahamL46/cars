// src/components/CarView.jsx
import React, {Component} from 'react';
import { CAR_RAD, CAR_PAD } from '../utils/constants.js';

// This component expects the props:
    // x, y -- upper left corner of the component
    // wid, hgt -- size of the component
    // color -- color of the component
class CarView extends Component
{
    render()
    {
        // The style to use for the component
        const myStyle = 
        {
            top: this.props.y + CAR_PAD,
            left: this.props.x + CAR_PAD,
            width: this.props.wid - 2 * CAR_PAD - 2,
            height: this.props.hgt - 2 * CAR_PAD - 2,
            background: this.props.color,
            borderWidth: 1,
            borderColor: '#666666',
            borderStyle: 'solid',
            borderRadius: CAR_RAD,
            position: 'absolute'
        };
        return ( <div style={myStyle}></div>);
    }
}
export default CarView;
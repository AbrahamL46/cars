import React, { Component } from 'react';

class ButtonView extends Component {
  render() {
    const btn = {
      padding: '10px 18px',
      border: '2px solid #444',
      borderRadius: '4px',
      background: '#e8e8e8',
      cursor: 'pointer',
      fontSize: '15px',
      fontFamily: 'inherit',
    };
    return (
      <button type="button" style={btn} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default ButtonView;

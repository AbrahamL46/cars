import React, { Component } from 'react';

class YouWon extends Component {
  render() {
    const overlay = {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(30, 80, 40, 0.4)',
      zIndex: 20,
      pointerEvents: 'none',
    };
    const card = {
      background: '#fffef5',
      padding: '20px 28px',
      borderRadius: '8px',
      border: '3px solid #2a7',
      boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
      fontSize: '22px',
      fontWeight: 700,
      color: '#163',
      textAlign: 'center',
    };
    return (
      <div style={overlay}>
        <div style={card}>You won!</div>
      </div>
    );
  }
}

export default YouWon;

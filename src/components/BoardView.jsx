// src/components/BoardView.jsx
import React, { Component } from 'react';
import { WID, HGT, GRID } from '../utils/constants.js';
import Square from './Square.jsx';
import CarView from './CarView.jsx';
import ButtonView from './ButtonView.jsx';
import YouWon from './YouWon.jsx';

const WALL_BORDER = 10;

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleReset() {
    this.props.cars.resetPuzzle();
  }

  handleNext() {
    this.props.cars.nextPuzzle();
  }

  render() {
    const bWid = WID * GRID;
    const bHgt = HGT * GRID;
    const cars = this.props.cars;

    const boardStyle = {
      position: 'relative',
      width: bWid,
      height: bHgt,
      background: '#222',
    };

    const wallWrap = {
      position: 'relative',
      display: 'inline-block',
      border: `${WALL_BORDER}px solid #5c5c5c`,
      borderRight: 'none',
      verticalAlign: 'top',
    };

    const list = [];
    let key = 1;
    for (let x = 0; x < WID; x++) {
      const cx = x * GRID;
      for (let y = 0; y < HGT; y++) {
        const cy = y * GRID;
        list.push(<Square key={key++} x={cx} y={cy} />);
      }
    }

    const num = cars.getNumCars();
    for (let i = 0; i < num; i++) {
      const { id, x, y, ncols, nrows, color } = cars.getCar(i);
      list.push(
        <CarView
          key={key++}
          x={x * GRID}
          y={y * GRID}
          wid={ncols * GRID}
          hgt={nrows * GRID}
          color={color}
          idNum={id}
          cars={cars}
        />
      );
    }

    const statsStyle = {
      marginTop: '12px',
      marginBottom: '8px',
      fontSize: '16px',
    };

    const tableStyle = {
      marginTop: '16px',
      borderCollapse: 'separate',
      borderSpacing: '12px',
    };

    return (
      <div>
        <div style={statsStyle}>
          Moves: {cars.getNumMoves()} &nbsp;|&nbsp; Best for this puzzle:{' '}
          {cars.getBestNumMoves()}
        </div>

        <div style={wallWrap}>
          <div style={boardStyle} data-board-version={this.props.counter}>
            {cars.hasWon() ? <YouWon /> : null}
            {list}
          </div>
        </div>

        <table style={tableStyle}>
          <tbody>
            <tr>
              <td>
                <ButtonView label="Reset" onClick={this.handleReset} />
              </td>
              <td>
                <ButtonView label="Next puzzle" onClick={this.handleNext} />
              </td>
              <td style={{ verticalAlign: 'middle', fontSize: '15px' }}>
                Puzzle #{cars.getPuzzleNumber()}
                {cars.hasWon() ? ' — solved; Next loads another puzzle.' : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BoardView;

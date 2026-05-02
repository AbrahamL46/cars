import React, { Component } from 'react';
import BoardView from './components/BoardView.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onBoardUpdate = this.onBoardUpdate.bind(this);
    props.cars.setRedrawCallback(this.onBoardUpdate);
  }

  onBoardUpdate(counter) {
    this.setState({ counter });
  }

  render() {
    return (
      <div className="App" style={{ padding: '16px 24px' }}>
        <h1 style={{ fontSize: '24px', marginTop: 0 }}>Cars puzzle</h1>
        <p style={{ maxWidth: '52rem', lineHeight: 1.5 }}>
          Click near one <strong>end</strong> of a car to slide it that way. Only the red goal
          car can use the opening on the right to exit. Use Reset to restart this level or Next
          to load another puzzle.
        </p>
        <BoardView
          cars={this.props.cars}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default App;
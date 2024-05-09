import React, { Component } from 'react';

interface TimerState {
  time: Date;
}

class Timer extends Component<{}, TimerState> {
  private timerID: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <p> Current time: {this.state.time.toLocaleTimeString()} </p>;
  }
}

export default Timer;
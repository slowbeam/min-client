import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {

  state = {
    currentTime: 0,
    timerEnd: null,
    intervalNum: null

  }

  calculateAndRenderTimer = () => {
    const currentTime = this.state.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime - (minutes * 60);

    if (currentTime === 0) {
      return "00:00";
    }
    else if (currentTime < 10 ) {
      return "00:0" + currentTime;
    }
    else if (currentTime < 60 ) {
      return "00:" + currentTime;
    }
    else if (currentTime < 600) {

      if (seconds < 60 && seconds >= 10) {
        return "0" + minutes + ":" + seconds;
      }
      else if (seconds < 10) {
        return "0" + minutes + ":0" + seconds;
      }  
    }
    else if (currentTime < 3600) {
      if (seconds < 60 && seconds >= 10) {
        return minutes + ":" + seconds;
      }
      else if (seconds < 10) {
        return minutes + ":0" + seconds;
      }  
    }
  }

  handleStartClick = () => {
    const timer = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1
      })
    },
    10);

    this.setState({
      intervalNum: timer
    })
  }

  handleStopClick = () => {
    clearInterval(this.state.intervalNum);
  }

  handleResetClick = () => {
    this.setState({
      currentTime: 0,
      timerEnd: null,
      intervalNum: null
    })
  }


  render() {
    return (
      <div className="timer">
        <div className="timer-counter">{this.calculateAndRenderTimer()}</div>
        <div className="timer-buttons">
            <div className="timer-button start" onClick={this.handleStartClick}>start</div>
            <div className="timer-button stop" onClick={this.handleStopClick}>stop</div>
            <div className="timer-button reset" onClick={this.handleResetClick}>reset</div>
        </div>    
      </div>
    )
  }
}

import React from 'react';

import './whoPlay.css';

export default class WhoPlay extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let {playerX, winGame, minutes, seconds} = this.props;
    let flagPlayer = winGame ? !playerX : playerX;
    let valuePlayer = flagPlayer ? 'X' : '0';
    let valueWin = winGame ? `Player(${valuePlayer}) wins!` : `It's player(${valuePlayer}) turn`;
    return (
      <div className = "statistic">
        <span className="status-player">{valueWin}</span>
        <span className="time-game">{`${minutes}:${seconds}`}</span>
      </div>
    )
  }
}
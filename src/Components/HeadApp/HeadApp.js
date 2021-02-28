import React from 'react';
import './HeadApp.css';

export default class Statistic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div className = "wrap-statistic">
        <button className="btn-new-game" onClick={this.props.newGame}>New Game</button>
        <button className="btn-settings"
        onClick= {this.props.changeSettingsPage}>Settings</button>
        <button className="btn-score">Score</button>
      </div>
    )
  }
}
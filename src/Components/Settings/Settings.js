import React from 'react';
import './Settings.css';

export default class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const {musicOn, soundOn, playerFirstX, changeMusicOn, changeSoundOn, changePlayerX} = this.props;
    return(
      <div className = "settings">
        <p onClick={()=> {changeMusicOn()}}>music: <span className="settings-value">{musicOn ? 'ON' : 'OFF'}</span></p>
        <p onClick={()=> {changeSoundOn()}}>sound effects: <span className="settings-value">{soundOn ? 'ON' : 'OFF'}</span></p>
        <p onClick={()=> {changePlayerX()}}>Change your figure: <span className="settings-value">{playerFirstX ? 'X' : 'O'}</span></p>
        <p>Change play styles: white</p>
        <p>Increase difficulty: ON</p>
      </div>
    )
  }
}
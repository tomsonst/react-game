import React from 'react';
import './Settings.css';

export default class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const {musicOn, soundOn, changeMusicOn, changeSoundOn} = this.props;
    return(
      <div className = "settings">
        <p onClick={()=> {changeMusicOn()}}>music: <span className="settings-value">{musicOn ? 'ON' : 'OFF'}</span></p>
        <p onClick={()=> {changeSoundOn()}}>sound effects: <span className="settings-value">{soundOn ? 'ON' : 'OFF'}</span></p>
        <p>Change your figure: X</p>
        <p>Change play styles: white</p>
        <p>Increase difficulty: ON</p>
      </div>
    )
  }
}
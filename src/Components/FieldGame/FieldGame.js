import React from 'react';

import './FieldGame.css';
import WinPlayer from '../WinPlayer/WinPlayer.js';
import ItemField from '../ItemField/ItemField.js';

export default class FieldGame extends React.Component {
  constructor(props){
    super(props);
  this.state ={
    arrElements: this.props.arrElements,
    addValueElement: this.props.addValueElement
  }
  }

  render(){
    return (
      <div className="field-game">
          {this.props.arrElements.map((elem, index) => (
            <ItemField elem={elem} index={index} key={index} addValueElement ={this.props.addValueElement} />
          ))}
          <this.props.AddSettings />
      </div>
    );
  }
}
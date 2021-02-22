import React from 'react';

import './FieldGame.css';
import winCombinations from './winCombination.js';
import WinPlayer from '../WinPlayer/WinPlayer.js';

export default class FieldGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrElements: ['', '', '', '', '', '', '', '', ''],
      classItem: 'item',
      playerX: true,
      winMessage: false
    }
  }

  addValueElement = (elem, index, e) => {
    this.setState((state) => {
      let newArr;
      if(elem === '' && this.state.winMessage === false){
        if(state.playerX === true){
          newArr = [...state.arrElements.slice(0, index), 'X', ...state.arrElements.slice(index + 1)];
        } else {
          newArr = [...state.arrElements.slice(0, index), 'O', ...state.arrElements.slice(index + 1)];
        }
        const Item = document.getElementById(`${index}`);
        Item.classList.add('addItem');
        this.checkWin(newArr);
        return {arrElements: newArr,
          playerX: !state.playerX};
      }
    });
  }

  checkWin = (arr) => {
    const arrElem = arr;
    console.log(arrElem)
    for(let i = 0; i < winCombinations.length; i += 1){
      if(arrElem[winCombinations[i][0]] === arrElem[winCombinations[i][1]] 
        &&  arrElem[winCombinations[i][0]] === arrElem[winCombinations[i][2]]
        && arrElem[winCombinations[i][0]] !== ''){
          this.state.winMessage = true;
          if(this.state.playerX){
            console.log('WIN X')
          } else {
            console.log('WIN O')
          }
      }
    }
  }

  render(){
    return (
      <div className="field-game">
          {this.state.arrElements.map((elem, index) => (
        <div className = "item" id = {index} key = {index} onClick = {this.addValueElement.bind(this, elem, index)}>
          {elem}
        </div>
      ))}
      <WinPlayer winMessage={this.state.winMessage} />
      </div>
    );
  }
}
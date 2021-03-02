import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer.js';
import FieldGame from './Components/FieldGame/FieldGame.js';
import HeadApp from './Components/HeadApp/HeadApp.js';
import winCombinations from './winCombination.js';
import WhoPlay from './Components/WhoPlay/WhoPlay.js';
import Settings from './Components/Settings/Settings.js';
import soundfile from './assets/whoosh.mp3';
import musicFon from './assets/musicfon.mp3';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrElements: ['', '', '', '', '', '', '', '', ''],
      playerX: true,
      playerFirstX: true,
      winGame: false,
      settingsPage: false,
      pause: true,
      seconds: '00',
      minutes: '00',
      musicOn: true,
      soundOn: true,

    }

  this.audio = new Audio(soundfile);
  this.music = new Audio(musicFon);
  this.music.loop = true;
  }
  
  addValueElement = (elem, index) => {
    this.setState((state) => {
      let newArr;
      if(elem === '' && this.state.winGame === false){
        if(state.playerX === true){
          newArr = [...state.arrElements.slice(0, index), 'X', ...state.arrElements.slice(index + 1)];
        } else {
          newArr = [...state.arrElements.slice(0, index), 'O', ...state.arrElements.slice(index + 1)];
        }
        const Item = document.getElementById(`${index}`);    
        Item.classList.add('addItem');
        if(this.state.soundOn){
          this.audio.play()
        }
        this.checkWin(newArr);
        return {arrElements: newArr,
          playerX: !state.playerX};
      }
    });
  }

  newGame = () => {
    const items = document.querySelectorAll('.addItem');
    for(let i = 0; i < items.length; i++){
      items[i].classList.remove('addItem')
    }
    let player = this.state.playerFirstX ? true : false;
    this.setState((state) => {
      return {
        arrElements: ['', '', '', '', '', '', '', '', ''],
        classItem: 'item',
        playerX: player,
        winGame: false
      }
    })
  }

  checkWin = (arr) => {
    const arrElem = arr;
    console.log(arrElem)
    for(let i = 0; i < winCombinations.length; i += 1){
      if(arrElem[winCombinations[i][0]] === arrElem[winCombinations[i][1]] 
        &&  arrElem[winCombinations[i][0]] === arrElem[winCombinations[i][2]]
        && arrElem[winCombinations[i][0]] !== ''){
          // eslint-disable-next-line react/no-direct-mutation-state
          this.state.winGame = true;
          for(let j = 0; j < winCombinations[i].length; j += 1){
            const Item = document.getElementById(winCombinations[i][j]);
            Item.classList.remove('addItem');
          }
      }
    }
  }

  playMusic = () => {
    if(this.state.musicOn){
      this.music.play();
    } else{
      this.music.pause();
    }
    this.setState(()=>{return {pause: false}})
  }

  changeSettingsPage = () => {
    this.setState((state) => {
      return {settingsPage: !state.settingsPage}
    })
  }

  changeMusicOn = () => {
    this.setState((state) => {
      return {musicOn: !state.musicOn}
    });
    console.log(this.state.musicOn)
    setTimeout(() => { this.playMusic(); }, 1);
  }

  changeSoundOn = () => {
    this.setState((state) => {
      return {soundOn: !state.soundOn}
    });
  }

  changePlayerX = () => {
    this.setState((state) => {
      return {
        playerX: !state.playerX,
        playerFirstX: !state.playerFirstX}
    });
  }

  getStateLocalStorage = () => {
    this.setState((state) => {
      if(localStorage.getItem('') !== null){
        return {
          arrElements: localStorage.getItem('arrElements')
        }
      }
    })
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    if(!this.state.pause){
      this.setState((state) => {
        if(+state.seconds < 9){
          return{seconds: `0${+state.seconds + 1}`}
        } else if(+state.seconds === 59){
          return{
            seconds: '00',
            minutes: `0${+state.minutes + 1}`
          }
        }
        return {seconds: `${+state.seconds + 1}`}
      });
    }
  }

  AddSettings =() => {
    if(this.state.settingsPage) {
      return <Settings musicOn={this.state.musicOn}
      soundOn={this.state.soundOn}
      playerX={this.state.playerX}
      playerFirstX={this.state.playerFirstX}
      changeMusicOn={this.changeMusicOn}
      changeSoundOn={this.changeSoundOn}
      changePlayerX={this.changePlayerX}/>
    }
    return null
  }

  render() {
    return (
      <div className="App" onClick={this.playMusic}>
        <HeadApp newGame={this.newGame}
                 changeSettingsPage={this.changeSettingsPage} />
        <FieldGame 
        arrElements ={this.state.arrElements}
        playerX ={this.state.playerX}
        winGame ={this.state.winGame}
        addValueElement ={this.addValueElement} 
        AddSettings ={this.AddSettings}/>
        <WhoPlay playerX ={this.state.playerX}
                 winGame ={this.state.winGame} 
                 seconds ={this.state.seconds}
                 minutes ={this.state.minutes}/>
        <Footer />
      </div>
    );
  }
}


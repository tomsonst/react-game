import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer.js';
import FieldGame from './Components/FieldGame/FieldGame.js';
import Statistic from './Components/Statistic/Statistic.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Statistic />
        <FieldGame />
        <Footer />
      </div>
    );
  }
}


import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles } from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      numTiles: 36, 
      playing: false,
      previousTileIndex: null, 
      tiles: [], 
      toBeCleared: null
    }
  }

  startGame = () => {
    this.setState((state) => ({
      ...state,
      tiles: createTiles(state.numTiles),
      playing: true, 
      previousTileIndex: null, 
      toBeCleared: null
    }))
  }

  render() {
  const { playing, numTiles, tiles } = this.state
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={playing} numTiles={numTiles} startGame={this.startGame}/>
        <Board numTiles={numTiles} tiles={tiles}/>
    </div>
  );

  }
}

export default App;

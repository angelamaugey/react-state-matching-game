import React from 'react';
import './Button.css';

const Button = ({ playing, startGame, numTiles }) => {
  const handleOnClick = () => startGame(numTiles)
  return (<button value={playing} onClick={handleOnClick}>{playing ? "Reset" : "Play"}</button>)
}

export default Button

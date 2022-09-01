import React from 'react'

import './Board.css';
import Tile from '../Tile'

const Board = ({ tiles }) => {

  const tileGrid = (tiles) => tiles.map((tile, i) => (<Tile key={i} {...tile}/>))

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {tileGrid(tiles)}
    </div>
  )
}

export default Board

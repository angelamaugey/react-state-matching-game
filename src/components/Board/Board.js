import React from 'react'

import './Board.css';
import Tile from '../Tile'

const Board = (props) => {
  const { tiles: tilesProps } = props

  const tiles = (tiles) => tiles.map((tile, i) => (<Tile key={i} {...tile}/>))

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {tiles(tilesProps)}
    </div>
  )
}

export default Board

import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const { selected, matched, color, handleTileClicked, id } = props
  
  const generatedColor = selected || matched ? ({ backgroundColor: color }) : null
  return (
    <div className='Tile' style={generatedColor} onClick={() => handleTileClicked(id, color)}>
      {selected || matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile

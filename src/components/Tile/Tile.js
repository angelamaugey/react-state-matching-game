import React from 'react'

import './Tile.css'

const Tile = ({ selected, matched, color, svg }) => {
  const generatedColor = selected | matched ? ({ backgroundColor: color }) : null
  return (
    <div className='Tile' style={generatedColor}>
      {selected | matched ? svg : null}
    </div>
  )
}

export default Tile

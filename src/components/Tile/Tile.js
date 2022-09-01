import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const { selected, matched, color } = props
  
  const generatedColor = selected || matched ? ({ backgroundColor: color }) : null
  return (
    <div className='Tile' style={generatedColor}>
      {selected || matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile

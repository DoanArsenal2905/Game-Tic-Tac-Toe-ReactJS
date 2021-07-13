import React from 'react'
import Cell from './Cell'

const Row = (props) => {
  const { elements, row, tick, pieces_win } = props
  const cells = elements.map((e, index) => (
    <Cell
      data={e}
      row={row}
      col={index}
      tick={(row, col) => tick(row, col)}
      pieces_win={pieces_win}
    />
  ))
  return cells
}

export default Row

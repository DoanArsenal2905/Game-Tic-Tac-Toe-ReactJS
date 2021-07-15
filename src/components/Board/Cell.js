import React from 'react'
import { pieces } from '../../constants'
import '../../styles/Cell.css'

const Cell = (props) => {
  const class_css_o = 'btn-default btnO btn-piece'
  const class_css_x = 'btn-default btnX btn-piece'
  const class_css_normal = 'btn-default btn-piece'

  const { data, row, col, tick, pieces_win } = props
  let my_class_css =
    data === pieces.O
      ? class_css_o
      : data === pieces.X
      ? class_css_x
      : class_css_normal
  if (pieces_win !== null) {
    for (var i = 0; i < pieces_win.length; i++) {
      if (pieces_win[i][0] === row && pieces_win[i][1] === col)
        my_class_css = my_class_css.concat(' btn-win')
    }
  }

  return (
    <button
      className={my_class_css}
      onClick={() => {
        if (data === '') tick(row, col)
      }}
    >
      {data}
    </button>
  )
}
export default Cell

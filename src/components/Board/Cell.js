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
      let { type } = pieces_win.slice(-1)[0]
      if (
        pieces_win[i][0] === row &&
        pieces_win[i][1] === col &&
        type === 'col'
      ) {
        my_class_css = my_class_css.concat(' btn-win-col')
      }
      if (
        pieces_win[i][0] === row &&
        pieces_win[i][1] === col &&
        type === 'row'
      ) {
        my_class_css = my_class_css.concat(' btn-win-row')
      }
      if (
        pieces_win[i][0] === row &&
        pieces_win[i][1] === col &&
        type === 'zRight'
      ) {
        my_class_css = my_class_css.concat(' btn-win-zRight')
      }
      if (
        pieces_win[i][0] === row &&
        pieces_win[i][1] === col &&
        type === 'zLeft'
      ) {
        my_class_css = my_class_css.concat(' btn-win-zLeft')
      }
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        className={my_class_css}
        onClick={() => {
          if (data === '') tick(row, col)
        }}
      >
        {data}
      </button>
    </div>
  )
}
export default Cell

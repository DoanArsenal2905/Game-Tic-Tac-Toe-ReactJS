import { types } from '../constants'

export const set_number_cell = (number_cell) => ({
  type: types.SET_NUMBER_CELL,
  number_cell
})

export const init_array = (array_board) => ({
  type: types.INIT_ARRAY,
  array_board
})

// export const tick = (array_new) => ({
//   type: types.TICK,
//   array_new
// })

export const switch_piece = (data) => ({
  type: types.SWITCH_PIECE,
  data
})

// export const undo = () => ({
//   type: 'UNDO',
//   payload: null
// })

export const tickAndSwitch = (switchTurn, row, col) => ({
  type: types.TICK_AND_SWITCH_PIECE,
  payload: {
    switchTurn,
    row,
    col
  }
})

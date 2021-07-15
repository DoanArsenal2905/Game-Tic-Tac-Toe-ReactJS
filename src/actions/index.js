import { types } from '../constants'

export const set_number_cell = (number_cell) => ({
  type: types.SET_NUMBER_CELL,
  number_cell
})

export const init_array = (number_cell) => ({
  type: types.INIT_ARRAY,
  number_cell
})

export const switch_piece = (data) => ({
  type: types.SWITCH_PIECE,
  data
})

export const tickAndSwitch = (switchTurn, row, col) => ({
  type: types.TICK_AND_SWITCH_PIECE,
  payload: {
    switchTurn,
    row,
    col
  }
})

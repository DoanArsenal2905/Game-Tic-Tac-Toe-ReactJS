import { types, pieces } from '../constants'
import _ from 'lodash'

const inital_state = {
  past: [],
  future: [],
  present: {
    number_cell: null,
    array_board: Array(15)
      .fill('')
      .map(() => Array(15).fill('')),
    piece_current: pieces.X
  }
}
const main = (state = inital_state, action) => {
  switch (action.type) {
    case types.SET_NUMBER_CELL: {
      return { ...state, number_cell: parseInt(action.number_cell) }
    }

    case types.INIT_ARRAY: {
      const newState = _.cloneDeep(state)
      const array_new = Array(parseInt(action.number_cell))
        .fill('')
        .map(() => Array(parseInt(action.number_cell)).fill(''))

      const newPresent = {
        ...state.present,
        array_board: array_new
      }

      return {
        ...newState,
        present: newPresent
      }
    }
    case types.SWITCH_PIECE: {
      return { ...state, piece_current: action.data }
    }

    case types.TICK_AND_SWITCH_PIECE: {
      const piece_current = action.payload.switchTurn
      const newState = _.cloneDeep(state)
      const array_new = newState.present.array_board
      array_new[action.payload.row][action.payload.col] = piece_current
      const newPast = [...state.past, state.present]
      const newPresent = {
        ...state.present,
        array_board: array_new,
        piece_current
      }

      return {
        ...newState,
        present: newPresent,
        past: newPast
      }
    }

    case 'UNDO': {
      const newState = _.cloneDeep(state)
      const newFurure = [...newState.future, newState.present]
      const newPresent = newState.past[newState.past.length - 1]
      const newPast = newState.past
      newPast.pop()

      return {
        future: newFurure,
        present: newPresent,
        past: newPast
      }
    }

    case 'REDO': {
      const newState = _.cloneDeep(state)
      const newFurure = newState.future
      const newPast = [...newState.past, newState.present]
      const newPresent = newState.future[newState.future.length - 1]
      newFurure.pop()
      return {
        future: newFurure,
        present: newPresent,
        past: newPast
      }
    }

    default:
      return state
  }
}

export default main

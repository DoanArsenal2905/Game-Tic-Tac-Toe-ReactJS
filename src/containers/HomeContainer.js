import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../components/Home'
import { set_number_cell, init_array, tick, switch_piece } from '../actions'
import { pieces } from '../constants'
import { isWin } from '../algorithm'

const HomeContainer = () => {
  const [count, set_count] = useState(0)
  const [is_win, set_is_win] = useState(-1)
  const [pieces_win, set_pieces_win] = useState(null)

  const array_board = useSelector((state) => state.main.present.array_board)
  const array_boards = useSelector((state) => state)
  console.log(array_boards)
  const piece_current = useSelector((state) => state.main.present.piece_current)
  const number_cell = useSelector((state) => state.main.present.number_cell)

  const dispatch = useDispatch()

  const tickBoard = (row, col) => {
    if (is_win === 1) {
      return
    }
    // count number of tick
    let count_tmp = count + 1
    set_count(count_tmp)

    // update board
    let array_new = [...array_board]
    array_new[row][col] = piece_current
    dispatch(tick(array_new))

    // check win
    const piece_win = isWin(array_new, row, col, piece_current)
    if (piece_win.length > 0) {
      set_is_win(1)
      set_pieces_win(piece_win)
    } else if (count_tmp === number_cell * number_cell) {
      set_is_win(0)
    } else {
      // switch player
      dispatch(switch_piece(piece_current === pieces.X ? pieces.O : pieces.X))
    }
  }

  const resetBoard = () => {
    dispatch(
      init_array(
        Array(number_cell)
          .fill(null)
          .map(() => Array(number_cell).fill(null))
      )
    )
    dispatch(switch_piece(pieces.X))

    set_count(0)
    set_is_win(-1)
    set_pieces_win(null)
  }

  return (
    <Home
      setNumberCell={(numberCell) => {
        const number_cell = parseInt(numberCell)
        dispatch(set_number_cell(number_cell))
        dispatch(
          init_array(
            Array(number_cell)
              .fill(null)
              .map(() => Array(number_cell).fill(null))
          )
        )
      }}
      array_board={array_board}
      tick={(row, col) => tickBoard(row, col)}
      piece_current={piece_current}
      is_win={is_win}
      pieces_win={pieces_win}
      reset_map={() => resetBoard()}
    />
  )
}

export default HomeContainer

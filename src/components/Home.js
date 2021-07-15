import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Row from './Board/Row'
import '../styles/Home.css'
import { Header } from './Header'
import UndoRedo from './UndoRedo'
import {
  init_array,
  set_number_cell,
  switch_piece,
  tickAndSwitch
} from '../actions'
import { isWin } from '../algorithm'
import { pieces } from '../constants'

const Home = (props) => {
  const [numbercell, set_numbercell] = useState(0)
  const presentState = useSelector((state) => state.main.present)
  const [count, set_count] = useState(0)
  const [is_win, set_is_win] = useState(-1)
  const [pieces_win, set_pieces_win] = useState(null)
  const [player, setPlayer] = useState(
    presentState.piece_current === 'O' ? true : false
  )

  const array_board = useSelector((state) => state.main.present.array_board)
  const piece_current = useSelector((state) => state.main.present.piece_current)
  const number_cell = useSelector((state) => state.main.present.number_cell)

  const dispatch = useDispatch()

  const handleOnChange = (e) => set_numbercell(e.target.value)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (numbercell === null) return
      else if (parseInt(numbercell) < 10) {
        alert('Bé thế? Nhập lại đê!')
        return
      } else if (parseInt(numbercell) > 50) {
        alert('To thế? Nhập lại đê!')
        return
      }
      dispatch(set_number_cell(numbercell))
    }
  }

  const tickBoard = (row, col) => {
    if (is_win === 1) {
      return
    }
    let currentPiece = player ? 'O' : 'X'
    setPlayer(!player)
    // count number of tick
    let count_tmp = count + 1
    set_count(count_tmp)

    // update board
    let array_new = [...array_board]
    // array_new[row][col] = piece_current

    let check = false

    // dispatch(tick(array_new))

    // check win
    // const piece_win = isWin(array_new, row, col, piece_current)

    const piece_win = isWin(array_new, row, col, currentPiece)

    console.log(piece_win)

    if (piece_win.length > 0) {
      set_is_win(1)
      set_pieces_win(piece_win)
    } else if (count_tmp === number_cell * number_cell) {
      set_is_win(0)
    }
    dispatch(tickAndSwitch(currentPiece, row, col))
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
    <div>
      <Header />
      {array_board !== null && (
        <div className="board">
          <div className="game">
            <span>Tùy chọn kích thước bàn cờ: </span>
            <input
              style={{ marginBottom: 10 }}
              type="number"
              placeholder={numbercell}
              required
              onChange={(e) => handleOnChange(e)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <span> (Min: 10, Max: 50, Default: 15)</span>
            {array_board.map((e, index) => (
              <div style={{ display: 'flex', height: 25 }} key={index}>
                <Row
                  elements={e}
                  tick={(row, col) => tickBoard(row, col)}
                  row={index}
                  pieces_win={pieces_win}
                />
              </div>
            ))}
          </div>
          <div className="information">
            <h3>Thông tin</h3>
            <p>Người đang đánh: {piece_current}</p>
            <p>
              {' '}
              Kết quả:{' '}
              {is_win === 1 ? (
                <span>{piece_current} thắng</span>
              ) : is_win === 0 ? (
                <span>Hòa</span>
              ) : null}
            </p>
            <div>
              <UndoRedo />
              <button className="btn" onClick={() => resetBoard()}>
                Chơi lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

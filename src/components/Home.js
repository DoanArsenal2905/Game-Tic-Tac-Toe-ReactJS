import React, { useState } from 'react'
import Row from './Board/Row'
import '../styles/Home.css'
import { Header } from './Header'

const Home = (props) => {
  const [numbercell, set_numbercell] = useState(15)

  const {
    setNumberCell,
    array_board,
    tick,
    piece_current,
    is_win,
    pieces_win,
    reset_map
  } = props

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
      setNumberCell(numbercell)
    }
  }

  return (
    <div>
      <Header />
      {array_board === null ? (
        <div className="input-custom">
          <span>Tùy chọn kích thước bàn cờ: </span>
          <input
            type="number"
            placeholder="15"
            required
            autoFocus
            onChange={(e) => handleOnChange(e)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <span> (Min: 10, Max: 50, Default: 15)</span>
        </div>
      ) : (
        <div className="board">
          <div className="game">
            <span>Tùy chọn kích thước bàn cờ: </span>
            <input
              style={{ marginBottom: 10 }}
              type="number"
              placeholder="15"
              required
              onChange={(e) => handleOnChange(e)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <span> (Min: 10, Max: 50, Default: 15)</span>
            {array_board.map((e, index) => (
              <div style={{ display: 'flex', height: 25 }} key={index}>
                <Row
                  elements={e}
                  tick={(row, col) => tick(row, col)}
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
            <button onClick={() => reset_map()} className="btn btn-info">
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

// Func isWin will return array have length 5 when win and return array empty
export const isWin = (board, row, col, turn) => {
  let piece_win = []
  let block = false
  // check col win
  let index = col - 1
  while (index >= 0 && board[row][index] === turn) {
    piece_win.push([row, index])
    index--
  }
  while (index >= 0 && board[row][index] !== turn && board[row][index] !== '') {
    block = true
    index--
  }
  index = col + 1
  while (index <= board.length - 1 && board[row][index] === turn) {
    piece_win.push([row, index])
    index++
  }
  while (
    index <= board.length - 1 &&
    board[row][index] !== turn &&
    board[row][index] !== ''
  ) {
    block = true
    index++
  }

  if (piece_win.length >= 3 && block === false) {
    piece_win.push([row, col], { type: 'col' })
    return piece_win
  }
  if (piece_win.length > 3 && block === true) {
    piece_win.push([row, col], { type: 'col' })
    return piece_win
  }

  // ------------------- check row -------------------//
  index = row - 1
  piece_win = []

  while (index >= 0 && board[index][col] === turn) {
    piece_win.push([index, col])
    index--
  }
  while (index >= 0 && board[index][col] !== turn && board[index][col] !== '') {
    block = true
    index--
  }

  index = row + 1
  while (index >= 0 && index < board.length - 1 && board[index][col] === turn) {
    piece_win.push([index, col])
    index++
  }
  while (
    index >= 0 &&
    index < board.length - 1 &&
    board[index][col] !== turn &&
    board[index][col] !== ''
  ) {
    block = true
    index++
  }

  if (piece_win.length >= 3 && block === false) {
    piece_win.push([row, col], { type: 'row' })
    return piece_win
  }
  if (piece_win.length > 3 && block === true) {
    piece_win.push([row, col], { type: 'row' })
    return piece_win
  }

  // -------------- check diagonal right ---------------- //
  let row_index = row - 1
  let col_index = col - 1
  piece_win = []

  while (
    row_index >= 0 &&
    col_index >= 0 &&
    board[row_index][col_index] === turn
  ) {
    piece_win.push([row_index, col_index])
    row_index--
    col_index--
  }
  while (
    row_index >= 0 &&
    col_index >= 0 &&
    board[row_index][col_index] !== turn &&
    board[row_index][col_index] !== ''
  ) {
    block = true
    row_index--
    col_index--
  }

  row_index = row + 1
  col_index = col + 1
  while (
    row_index >= 0 &&
    col_index >= 0 &&
    row_index <= board.length - 1 &&
    col_index <= board.length - 1 &&
    board[row_index][col_index] === turn
  ) {
    piece_win.push([row_index, col_index])
    row_index++
    col_index++
  }
  while (
    row_index >= 0 &&
    col_index >= 0 &&
    row_index <= board.length - 1 &&
    col_index <= board.length - 1 &&
    board[row_index][col_index] !== turn &&
    board[row_index][col_index] !== ''
  ) {
    block = true
    row_index++
    col_index++
  }

  if (piece_win.length >= 3 && block === false) {
    piece_win.push([row, col], { type: 'zRight' })
    return piece_win
  }
  if (piece_win.length > 3 && block === true) {
    piece_win.push([row, col], { type: 'zRight' })
    return piece_win
  }
  // --------------- check diagonal left ------------------- //
  row_index = row - 1
  col_index = col + 1
  piece_win = []

  while (
    col_index >= 0 &&
    row_index >= 0 &&
    col_index <= board.length - 1 &&
    board[row_index][col_index] === turn
  ) {
    piece_win.push([row_index, col_index])
    row_index--
    col_index++
  }
  while (
    col_index >= 0 &&
    row_index >= 0 &&
    col_index <= board.length - 1 &&
    board[row_index][col_index] !== turn &&
    board[row_index][col_index] !== ''
  ) {
    block = true
    row_index--
    col_index++
  }

  row_index = row + 1
  col_index = col - 1
  while (
    row_index >= 0 &&
    row_index <= board.length - 1 &&
    col_index >= 0 &&
    board[row_index][col_index] === turn
  ) {
    piece_win.push([row_index, col_index])
    row_index++
    col_index--
  }
  while (
    row_index >= 0 &&
    row_index <= board.length - 1 &&
    col_index >= 0 &&
    board[row_index][col_index] !== turn &&
    board[row_index][col_index] !== ''
  ) {
    block = true
    row_index++
    col_index--
  }

  if (piece_win.length >= 3 && block === false) {
    piece_win.push([row, col], { type: 'zLeft' })
    return piece_win
  }
  if (piece_win.length > 3 && block === true) {
    piece_win.push([row, col], { type: 'zLeft' })
    return piece_win
  }
  return []
}

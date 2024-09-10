const human = 'X'
const ai = 'O'
const winOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const emptyCells = (layout) => {
  return layout.map((item, index) => {
    return (item === '' ? index : null)
  }).filter((item) => item !== null)
}
const checkWin = (layout) => {
  for (let i = 0; i < winOptions.length; i += 1) {
    const [a, b, c] = winOptions[i]
    if (layout[a] === 'X' && layout[b] === 'X' && layout[c] === 'X') {
      return -1
    }
    if (layout[a] === 'O' && layout[b] === 'O' && layout[c] === 'O') {
      return 1
    }
  }
  return false
}

export default function miniMax (gameLayout, player) {
  const empty = emptyCells(gameLayout)
  if (checkWin(gameLayout) === 1) {
    return { score: 10 }
  } else if (checkWin(gameLayout) === -1) {
    return { score: -10 }
  } else if (empty.length === 0) {
    return { score: 0 }
  }
  const moves = []
  for (let i = 0; i < empty.length; i++) {
    const move = {}
    move.index = empty[i]
    player === 'O' ? gameLayout[empty[i]] = 'O' : gameLayout[empty[i]] = 'X'
    player === 'O' ? move.score = miniMax([...gameLayout], human).score : move.score = miniMax([...gameLayout], ai).score
    moves.push(move)
    gameLayout[empty[i]] = ''
  }
  let bestMove
  if (player === 'O') {
    bestMove = moves.reduce((acc, curr, i) => moves[acc].score > curr.score ? acc : i, 0)
  } else {
    bestMove = moves.reduce((acc, curr, i) => moves[acc].score < curr.score ? acc : i, 0)
  }
  return moves[bestMove]
}

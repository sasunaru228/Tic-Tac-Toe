import React from 'react'

export default function Result ({ whoIsWin }) {
  return (
    <span>
      {whoIsWin === 1 ? 'GAMER WIN' : null}
      {whoIsWin === 2 ? 'BOT WIN' : null}
      {whoIsWin === 0 ? 'ITS DRAW!' : null}
    </span>
  )
}

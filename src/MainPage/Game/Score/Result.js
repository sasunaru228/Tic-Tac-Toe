import React from 'react'

export default function Result ({ whoIsWin }) {
  return (
    <span>
      {whoIsWin === 1 ? 'Вы победили' : null}
      {whoIsWin === 2 ? 'Бот победил' : null}
      {whoIsWin === 0 ? 'Ничья!' : null}
    </span>
  )
}

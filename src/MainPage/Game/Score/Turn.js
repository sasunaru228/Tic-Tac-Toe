import React from 'react'

export default function Turn ({ whoIsTurn }) {
  return (
    <span>
      {whoIsTurn ? 'Ход бота' : 'Ваш ход'}
    </span>
  )
}

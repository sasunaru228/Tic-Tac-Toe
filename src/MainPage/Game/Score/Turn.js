import React from 'react'

export default function Turn ({ whoIsTurn }) {
  return (
    <span>
      {whoIsTurn ? 'BOT' : 'GAMER'} MOVE
    </span>
  )
}

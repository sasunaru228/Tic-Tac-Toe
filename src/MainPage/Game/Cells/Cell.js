import React from 'react'
import classes from './Cell.module.css'
import { ReactComponent as Zero } from '../../../Images/o.svg'
import { ReactComponent as Cross } from '../../../Images/x.svg'

function Cell (props) {
  return (
    <span
      className={props.layout === '' ? classes.cell : classes.disabled}
      onClick={() => props.click(props.index)}
    >
      {props.layout === 'X' ? <Cross/> : null}
      {props.layout === 'O' ? <Zero /> : null}
    </span>
  )
}
export default Cell

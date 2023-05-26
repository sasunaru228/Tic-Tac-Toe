import React from 'react'

export default function Search (props) {
  return (
    <div>
      <input value={props.search} onChange={(event) => props.setSearch(event.target.value)} type="text"/>
      <input type="checkbox" onChange={() => props.setStocked(!props.stocked)}/>
    </div>
  )
}

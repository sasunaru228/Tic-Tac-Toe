import React, { useEffect } from 'react'
import classes from './ProductList.module.css'

export default function ProductList ({ data, search, stocked }) {
  useEffect(() => {
  }, [])
  return (
    <div>
      <div className={'Vegs'}>
        {
          data.map((item, idx) => {
            return <span
              className={item.stocked ? classes.product : classes.productRed}
              key={idx}
              style={{ display: (stocked && !item.stocked) || (item.name.toLowerCase().indexOf(search) === -1) ? 'none' : 'block' }}
            >
              {item.name + '  ' + item.price}
            </span>
          })
        }
      </div>
      <div className={'Fruits'}>

      </div>
    </div>
  )
}

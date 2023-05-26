import React, { useState } from 'react'
import Search from './Search/Search'
import ProductList from './ProductList/ProductList'

export default function Mockup () {
  const data = [{
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Apple'
  }, {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Dragon fruit'
  }, {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Passion fruit'
  }, {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Spinach'
  }, {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Pumpkin'
  }, {
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Peas'
  }]
  const [search, setSearch] = useState('')
  const [stocked, setStocked] = useState(0)
  return (<div>
      <Search
        setSearch={setSearch}
        search={search}
        stocked={stocked}
        setStocked={setStocked}
      />
      <ProductList
        data={data}
        search={search.toLowerCase().trim()}
        stocked={stocked}
      />
    </div>)
}

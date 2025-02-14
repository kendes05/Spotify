import React from 'react'
import ItemList from './ItemList'

const Main = () => {
  return (
    <div className='main'>
        <ItemList title="teste" items={5}></ItemList>
        <ItemList title="uebuefu" items={10}></ItemList>
    </div>
  )
}

export default Main
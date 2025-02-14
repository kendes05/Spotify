import React from 'react'
import SingleItem from './SingleItem'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
import { Link } from 'react-router-dom'


const ItemList = ({title, items, itemsArray,path, idPath}) => {

  return (
    <div className='item-list'>
                <div className='item-list__header'>
                    <h2>{title} populares</h2>
                    <Link to={path} className='item-list__link'>Mostrar tudo</Link>
                </div>
    
                <div className="item-list__container">
                    {itemsArray.filter((currentValue, index)=>index<items).map((currentObj, index)=> <SingleItem {...currentObj} key={`${title}-${index}`} idPath = {idPath}/>)}
                </div>
    
            </div>
  )
}

export default ItemList
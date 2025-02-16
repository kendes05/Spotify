import React from 'react'
import ItemList from './ItemList'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Main = ({type}) => {
  return (
    <div className='main'>
      {type === "artists"  || type === undefined ? <ItemList title="Artistas" items={5} itemsArray={artistArray} path="/artists" idPath="artist"></ItemList>: <></>}
      
      {type === "songs" || type === undefined ? <ItemList title="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="song"></ItemList>:<></>}
        
    </div>
  )
}

export default Main
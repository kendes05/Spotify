import React from 'react'
import ItemList from './ItemList'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Main = ({type}) => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Main
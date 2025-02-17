import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {

  const {id} = useParams()

  const {name, image, artist, duration, audio} = songsArray.filter((currentObj)=> currentObj._id === id)[0]

  const artistId = artistArray.filter((currentObj)=> currentObj.name === artist)[0]._id
  const artistImage = artistArray.filter((currentObj)=> currentObj.name === artist)[0].image
  
  const songsArrayFromArtist = songsArray.filter((currentObj) => currentObj.artist === artist);

  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length-1)
  const randomIndex2 = Math.floor(Math.random() * songsArrayFromArtist.length-1)

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id

  

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt="" />
        </div>
      </div>
        <div className="song__bar">
          <Link to={`/artist/${artistId}`} className='song__artist-image'>
            <img src={artistImage} alt="" width={75} height={75} />
          </Link>
          <Player duration = {duration} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} audio = {audio}/>

          <div>
            <p className='song__name'>{name}</p>
            <p>{artist}</p>
          </div>
        </div>
    </div>
  )
}

export default Song
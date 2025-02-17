import { artistArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currentObj)=>{
    const newArtistObj = {...currentObj};
    delete newArtistObj.id

    return newArtistObj;
})

const newSongsArray = songsArray.map((currentObj)=>{
    const newSongObj = {...currentObj};
    delete newSongObj.id

    return newSongObj;
})

const reponseSongs = await db.collection("songs").insertMany(newSongsArray)
//const reponseArtists = await db.collection("artists").insertMany(newArtistsArray)


console.log(reponseSongs)
//console.log(reponseArtists)
import {MongoClient} from 'mongodb'

const URI = "mongodb+srv://ptimbo652:KODGA8pB2veXwRnB@cluster0.s5pg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("Spotify")
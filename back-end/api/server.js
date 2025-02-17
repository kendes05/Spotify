import express from "express";
import { db } from "./connect.js";
import cors from "cors";


const app = express()

const PORT = 3000;

app.use(cors())

app.listen(PORT,()=>{
    console.log("Servidor rodando na porta "+PORT);
})

app.get("/artists",async (req,res)=>{
    res.send(await db.collection('artists').find({}).toArray());
})
app.get("/songs",async(req,res)=>{
    res.send(await db.collection('songs').find({}).toArray());
})
import express from "express"
import "dotenv/config"

const app=express()
const port=3925

const ritik="i am ritik"

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/twitter",(req,res)=>{
    res.send("ritikdotcom")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})